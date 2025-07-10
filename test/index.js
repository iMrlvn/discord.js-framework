console.log(require("../dist"));

const { readdirSync } = require("node:fs");

readdirSync("./dist/plugins")
    .filter(f => f.endsWith(".js"))
    .forEach(file => {
        try {
            const Plugin = require(`../dist/plugins/${file}`)[file.split(".")[0]];
            console.log(new Plugin());
        } catch(error) {
            console.log(error);
        }
    });