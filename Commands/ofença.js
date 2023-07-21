const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ofença")
        .setDescription("Faça uma ofença a alguém do servidor")
        .addUserOption((option) =>
            option.setName("user").setDescription("Select a user")
        ),

    async execute(interaction, client) {
        const { options, user } = interaction;
        let target = options.getUser("user") || user;

        function random(items){
            let index = Math.floor(Math.random() * items.length);
            return items[index];
        };

        let xingamentos = [
            `Espero que esteja tendo um péssimo dia, ${target}!`,
            `O ${interaction.user} te odeia, ${target}`,
            `Você é a pior pessoa do mundo, ${target}`,
            `${target}, espero que você nunca fique feliz.`,
            `Você não merece nada de bom, ${target}`,
            `O servidor inteiro de odeia e quer que você suma daqui, ${target}!`,
            `${target}, vai se fuder!`,
            `Você é um merda e estúpido, ${target}!`
        ]
    
    const embed = new EmbedBuilder()
        .setColor('Random')
        .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
        .setTitle('Um xingamento para alguém que não merece nada!')
        .setDescription(random(xingamentos))
        .setImage('https://media.discordapp.net/attachments/1074354811861995590/1114914596587847700/ofenca.gif?width=359&height=197')
        .setTimestamp()
        .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

        await interaction.reply({ content: `${target}`,embeds: [embed] });
    },
};