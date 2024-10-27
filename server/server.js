require("dotenv").config();
const express = require("express");
const connectdb = require("./connectDB");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./Models/User");
const generateToken = require("./generateToken");
const cookieParser = require("cookie-parser");
const protectware = require("./protectware");

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.post("/auth/signup", async (req, res) => {
  const { fullname, username, email, password } = req.body;
  const hasedpass = bcrypt.hashSync(password, 10);
  try {
    const user = new User({
      fullname,
      username,
      email,
      password: hasedpass,
    });
    if (user) {
      await user.save();
      generateToken(user._id, res);
      res.status(201).json({ user });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    const hasedpass = bcrypt.compareSync(password, user?.password || "");
    if (hasedpass) {
      generateToken(user._id, res);
      res.status(201).json({ user });
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/auth/getme", protectware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/auth/logout", protectware, async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  connectdb();
  console.log(`Server is running on http://localhost:${port}`);
});
