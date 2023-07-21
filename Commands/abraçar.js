const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
    "https://media.discordapp.net/attachments/1074354811861995590/1114914264281526302/hug6.gif?width=439&height=248",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914264679989319/hug5.gif?width=448&height=248",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914265070047302/hug4.gif?width=448&height=251",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914265409794048/hug3.gif?width=448&height=251",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914265757925396/hug2.gif?width=449&height=252",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914266106040390/hug1.gif?width=449&height=380",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914263455248444/hug8.gif?width=448&height=250",
    "https://media.discordapp.net/attachments/1074354811861995590/1114914263866282075/hug7.gif?width=539&height=304"
];
module.exports = {
    data: new SlashCommandBuilder()
        .setName("abraçar")
        .setDescription("De um abraço em alguém")
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Quem você deseja abraçar")
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
                    .setTitle("Que fofinho.")
                    .setDescription(
                        `${member} Abraçou ${user}! <:emoji7:1095095940613935156>`
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ]
        });
    }
}