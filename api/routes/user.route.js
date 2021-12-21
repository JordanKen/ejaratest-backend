const express = require("express");
const users = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {check, validationResult} = require("express-validator");
const auth = require("../middleware/Auth/auth.middleware");
const User = require("../../models/user");
var models = require('../../models')

// Require controller modules.
var user_controller = require("../controllers/user.controller");

const upload = require("../../upload").uploads;

var runUplaod = upload.fields([{
    name: 'avatar',
    maxCount: 1
}])



users.post("/login", user_controller.login);

users.post("/register",
    [
        check("email").isEmail().withMessage("Email Invalid"),
        check("email").notEmpty().withMessage("Fields Email is required"),
        check("name").notEmpty().withMessage("Fields first name is required"),
        check("username").notEmpty().withMessage("Fields last name is required"),
        check("password").notEmpty().withMessage("Fields password is required"),
    ],
    runUplaod, user_controller.register
);

users.get("/me", [auth.auth()], async (req, res) => {
    res.status(200).send({response: req.user});
});

//update profile user
users.post(
    "/profile/update",[auth.auth(),runUplaod] ,user_controller.updateProfileUser
);

// find all user who made one or more than one transaction with another user


//update password user
users.put(
    "/password/update",
    [auth.auth()],
    user_controller.updatePasswordUser
);

//forgot password user
users.post(
    "/password/forgot",
    [check("password").notEmpty().withMessage("Fields Password is required"),
        check("password_confirm").notEmpty().withMessage("Fields Confirm Password is required")],
    user_controller.resetPasswordUser
);

// Log user out of the application
users.get("/logout", [auth.auth()], user_controller.logoutUser);


module.exports = users;
