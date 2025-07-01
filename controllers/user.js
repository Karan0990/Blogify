const User = require("../models/user");
const { verifyToken } = require("../services/authentication")

async function handleCreateUser(req, res) {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password
    })
    res.render("signin");
};

async function handleSigninUser(req, res) {
    const { email, password } = req.body;

    try {
        const token = await User.matchpasswordAndGenerateToken(email, password);

        return res.cookie("token", token).redirect("/");
    } catch (error) {

        return res.render("signin", { error: "Incorrect email or password" });
    }


};

async function userLogout(req, res) {

    return res.clearCookie("token").redirect("/");

}

module.exports = { handleCreateUser, handleSigninUser, userLogout }