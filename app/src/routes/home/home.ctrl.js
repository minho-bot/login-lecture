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
    login: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
