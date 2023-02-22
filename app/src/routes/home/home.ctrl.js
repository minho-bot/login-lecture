"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index.ejs");
    },
    login: (req, res) => {
        res.render("home/login.ejs");
    },
};

const users = {
    id: ["minho", "sun", "gp"],
    psword: ["1", "2", "3"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다",
        });
    },
};

module.exports = {
    output,
    process,
};