const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "ready.js"
};

client.once('ready', async () => {
  console.log("\n" + ` ${client.user.tag} logged in`.brightGreen);
})