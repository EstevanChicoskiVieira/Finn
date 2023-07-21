const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Pegue a foto de algum usuário.")
        .addUserOption((option) =>
            option.setName("user").setDescription("Select a user")
        ),

    async execute(interaction, client) {
        const { options, user } = interaction;
        let target = options.getUser("user") || user;
        let avatarUrl = target.avatarURL({ size: 512, extension: "jpg" });
    
    const embed = new EmbedBuilder()
        .setColor('Random')
        .setTitle('Aqui está!')
        .setDescription(`Você pegou a foto de perfil de ${target}`)
        .setImage(`${avatarUrl}`)
        .setTimestamp()
        .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })

        await interaction.reply({ embeds: [embed] });
    },
};