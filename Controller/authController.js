const Login = require("../Models/authSchema");


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Login.findOne({ email: email, password: password });
        if (user) {
            res.send(user);
        } else {
            res.status(401).json("Invalid Login");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}