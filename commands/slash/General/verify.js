const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "verify",
    description: "Will verify your account",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        if (!interaction.member.roles.cache.some(role => role.name === 'Member')) {
        var role = interaction.member.guild.roles.cache.find(role => role.name === "Member");
        interaction.member.roles.add(role);
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({name: `Verifying user`, iconURL: `${interaction.user.displayAvatarURL()}`})
                    .setDescription(`Verifying ${interaction.user.tag}!`)
                    .setColor('Blue')
            ],
            ephemeral: true
        })  
    }    else {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({name: `ERROR!`, iconURL: `${interaction.user.displayAvatarURL()}`})
                    .setDescription(`You are already verified!`)
                    .setColor('Red')
            ],
            ephemeral: true
        })  
    }
    },
};
