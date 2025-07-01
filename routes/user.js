const { Router } = require("express");

const { handleCreateUser, handleSigninUser, userLogout } = require("../controllers/user")

const userRouter = new Router();


userRouter.get("/signin", (req, res) => {
    res.render("signin", { error: null });
})

userRouter.get("/signup", (req, res) => {
    res.render("signup");
})

userRouter.post("/signup", handleCreateUser);

userRouter.post("/signin", handleSigninUser);

userRouter.get("/logout", userLogout);



module.exports = userRouter;

