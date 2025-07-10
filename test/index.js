console.log(require("../dist"));

const { readdirSync } = require("node:fs");

readdirSync("./plugins")
    .forEach(file => {
        try {
            const Plugin = require(`../plugins/${file}`);
            console.log(new Plugin());
        } catch(error) {
            console.log(error);
        }
    });