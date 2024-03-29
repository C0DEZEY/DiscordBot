const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
  console.log("".blue);

  fs.readdirSync('./commands/prefix/').forEach(dir => {
    const commands = fs.readdirSync(`./commands/prefix/${dir}`).filter(file => file.endsWith('.js'));
    for (let file of commands) {

      let pull = require(`../commands/prefix/${dir}/${file}`);
      if (pull.config.name) {
        client.prefix_commands.set(pull.config.name, pull);
        console.log(`Loaded a file: ${pull.config.name} (#${client.prefix_commands.size})`.brightGreen)
      } else {
        console.log(`Couldnt load the file ${file}, missing module name value.`.red)
        continue;
      };

    };
  });
};
