"use strict";

const User = require("../../models/User");

// const UserStorage = require("../../models/UserStorage");

const output = {
     home: (req, res)=>{
        res.render("home/index.ejs");
    },
    login: (req, res)=>{
        res.render("home/login.ejs");
    },
    register: (req, res)=>{
        res.render("home/register.ejs");
    },
};

const process = {
    login: (req, res)=>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
