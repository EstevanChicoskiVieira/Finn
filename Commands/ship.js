const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ship")
        .setDescription("Veja o quão compativel um casal é!")
        .addUserOption(option =>
            option.setName("user1")
                .setDescription("Selecione o 1° ususário")
                .setRequired(true)
        )
        .addUserOption(option =>
            option.setName("user2")
                .setDescription("Selecione o 2° ususário")
                .setRequired(true)
        ),
    async execute(interaction) {
        const { options, member } = interaction

        const user1 = options.getUser("user1");
        const user2 = options.getUser("user2");

        const porc = Math.round(Math.random() * 100);

        return interaction.reply({
            content: `${user1}, ${user2}`,
            embeds: [
                new EmbedBuilder()
                    .setColor("Random")
                    .setTitle(`Temos um novo casal no servidor?`)
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
                    .setDescription(`
                        ${user1} e ${user2} são \`${porc}%\` compativeis! <:emoji7:1095095940613935156>
                        Agora cabe a vocês iniciarem um romance ou não... <:heart:1099378168571367574> <:heart:1099378168571367574> <:heart:1099378168571367574>
                    `)
                    .setImage('https://media.discordapp.net/attachments/1074354811861995590/1099373600479395890/image.png?width=413&height=142')
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
            ]
        });
    }
}