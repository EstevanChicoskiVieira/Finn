const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("elogio")
        .setDescription("Faça um elogio aleatório para algum membro do servidor")
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

        let elogios = [
            `Aparentemente o ${interaction.user} gosta muito de você, ${target}.`,
            `Espero que esteja tendo um ótimo dia ${target}!`,
            `O ${interaction.user} ama você, ${target}.`,
            `Você é uma pessoa incrível, ${target}!`,
            `${target}, você é muito fofinho(a)! rsrs`,
            `Você é muito bonito(a), ${target}... Muito lindo(a) mesmo!`,
            `Você merece tudo de bom e todo o amor do mundo, ${target}!`,
            `Não importa o que os outros dizem. Você é incrível, ${target}!`
        ]
    
    const embed = new EmbedBuilder()
        .setColor('Random')
        .setTitle('Um elogio para melhorar o seu dia!')
        .setDescription(random(elogios))
        .setImage('https://media.discordapp.net/attachments/1074354811861995590/1114914597061808148/cafune.gif?width=448&height=250')
        .setTimestamp()
        .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })

        await interaction.reply({ content: `${target}`,embeds: [embed] });
    },
};