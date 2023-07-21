const { SlashCommandBuilder, PermissionFlagsBits, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("enquete")
        .setDescription("Faça uma enquete")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option
                .setName("target")
                .setDescription("Escreva a pergunta.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("emoji1")
                .setDescription("Selecione o emoji 1")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("emoji2")
                .setDescription("Selecione o emoji 2")
                .setRequired(true)
        )
        .setDMPermission(false),

    async execute(interaction) {
        const { options } = interaction;

        const pergunta = options.getString('target');
        const emoji1 = options.getString('emoji1');
        const emoji2 = options.getString('emoji2')

        interaction.reply({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle(`${pergunta}`)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        ] })
        const message = await interaction.fetchReply();
		message.react(`${emoji2}`);
		message.react(`${emoji1}`);
    },
};