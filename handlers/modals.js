const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
    console.log("Modals Handler:".blue);

    const modals = fs.readdirSync(`./modals/`).filter(file => file.endsWith('.js'));

    for (let file of modals) {

        let pull = require(`../modals/${file}`);
        if (pull.id) {
            client.modals.set(pull.id, pull);
            console.log(`Loaded a file: ${file}`.brightGreen)
        } else {
            console.log(` Couldn't load the file ${file}. Missing modal ID.`.red)
            continue;
        }
    }
};
