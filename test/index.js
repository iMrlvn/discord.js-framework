console.log(require("../dist"));

const { readdirSync } = require("node:fs");

readdirSync("./lib/plugins")
    .forEach(file => {
        try {
            const Plugin = require(`../plugins/${file.split(".")[0]}`);
            console.log(new Plugin());
        } catch(error) {
            console.log(error);
        }
    });