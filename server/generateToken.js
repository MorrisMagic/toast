const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
  });
};
module.exports = generateToken;
