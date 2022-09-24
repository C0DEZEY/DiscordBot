const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "report",
    run: async (client, interaction, config, db) => {

        interaction.guild.channels.cache.get('1023059591136813086').send({
            embeds: [
            new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({name: ` ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}`})
            .setDescription(interaction.fields.getTextInputValue('report2'))
            .setTimestamp()
            .setFooter({ text: 'A report has been made at:'})
    ]});


        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription('Report has been sent to mods! please wait. Your response: ' + interaction.fields.getTextInputValue('report2'))
            ],
            ephemeral: true
        });

      
    },
};
