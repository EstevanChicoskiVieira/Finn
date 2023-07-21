const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const slaps = [
    "https://media.discordapp.net/attachments/1074354811861995590/1114909272728424491/kiss.gif?width=449&height=253",
    "https://media.discordapp.net/attachments/1074354811861995590/1114909952989999114/kiss2.gif?width=485&height=273",
    "https://media.discordapp.net/attachments/1074354811861995590/1114910054408265798/kiss5.gif?width=449&height=223",
    "https://media.discordapp.net/attachments/1074354811861995590/1114910055205187685/kiss4.gif?width=449&height=253",
    "https://media.discordapp.net/attachments/1074354811861995590/1114910056224399380/kiss3.gif?width=442&height=242",
    "https://media.discordapp.net/attachments/1074354811861995590/1114910601945288725/kiss6.gif?width=449&height=251"
];
module.exports = {
    data: new SlashCommandBuilder()
        .setName("beijar")
        .setDescription("De um beijo em alguém")
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Quem você deseja beijar?")
                .setRequired(true)
        ),
    async execute(interaction) {
        const { options, member } = interaction

        const user = options.getUser("target");

        return interaction.reply({
            content: `${user}`,
            embeds: [
                new EmbedBuilder()
                    .setColor("Random")
                    .setImage(slaps[Math.floor(Math.random() * slaps.length)])
                    .setTitle("Sera um novo casal?")
                    .setDescription(
                        `${member} beijou ${user}! <:emoji7:1095095940613935156>`
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ]
        });
    }
}