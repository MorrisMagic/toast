const jwt = require("jsonwebtoken");
const User = require("./Models/User");

const protectware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "you need to login first" });
    }
    const decoded = jwt.verify(token, process.env.JWT);
    if (!decoded) {
      return res.status(401).json({ error: "unauthorrzed:Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};

module.exports = protectware;
