"use strict";

class UserStorage{
    static #users = {
        id: ["minho", "sun", "gp"],
        psword: ["1", "2", "3"],
        nams: ["민호", "순", "기평"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
