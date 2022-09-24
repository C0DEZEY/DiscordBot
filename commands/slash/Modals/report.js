const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "report",
    description: "Report a user that has scammed or done somthing wrong",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('report')
            .setTitle('Report');

        const something = new TextInputBuilder()
            .setCustomId('report2')
            .setLabel("Type stuff")
            .setStyle(TextInputStyle.Short);

        const ActionRow = new ActionRowBuilder().addComponents(something);

        modal.addComponents(ActionRow);

        await interaction.showModal(modal);
    },
};
