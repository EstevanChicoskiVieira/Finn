const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
    "https://media.discordapp.net/attachments/1074354811861995590/1114912845595955331/slap7.gif?width=575&height=323",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912846090870814/slap6.gif?width=448&height=250",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912846501924904/slap5.gif?width=575&height=323",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912847047172096/slap3.gif?width=448&height=251",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912847529529364/slap2.gif?width=658&height=368",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912848011857991/slap1.gif?width=359&height=243",
    "https://media.discordapp.net/attachments/1074354811861995590/1114912845193289818/slap8.gif?width=575&height=323"
];
module.exports = {
    data: new SlashCommandBuilder()
        .setName("bater")
        .setDescription("De um tapa em alguém")
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Em quem você deseja bater?")
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
                    .setTitle('Carai borracha mano')
                    .setDescription(
                        `${member} Bateu em ${user}!`
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ]
        });
    }
}