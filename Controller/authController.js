const Login = require("../Models/authSchema");

exports.login = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login Successfully",
    });
  } catch(err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }

  // try {
  //     const { email, password } = req.body;
  //     const user = await Login.findOne({ email: email, password: password });
  //     if (user) {
  //         res.send(user);
  //     } else {
  //         res.status(401).json("Invalid Login");
  //     }
  // } catch (err) {
  //     res.status(500).json(err);
  //     console.log(err.message);
  // }
};
