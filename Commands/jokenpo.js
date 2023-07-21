const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jokenpo')
		.setDescription('Um jogo de Jokenpô contra algum membro do servidor.')
        .addUserOption(option =>
            option.setName("user")
                .setDescription("Com quem você deseja jogar Jokenpô?")
                .setRequired(true)
        ),

	async execute(interaction) {
        let rps = [
            "Pedra",
            "Papel",
            "Tesoura"
        ]

        function random(items){
            let index = Math.floor(Math.random() * items.length);
            return items[index];
        };

        let User1Jogo = random(rps);
        let User2Jogo = random(rps);

        const { options } = interaction;
        const user = options.getUser('user');

        if (User1Jogo == 'Pedra' && User2Jogo == 'Tesoura' || User1Jogo == 'Tesoura' && User2Jogo == 'Papel' || User1Jogo == 'Papel' && User2Jogo == 'Pedra'){
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`${interaction.user} tirou \`${User1Jogo}\` e o(a) ${user} tirou \`${User2Jogo}\`. O vencedor é ${interaction.user}! <:emoji11:1095108653134118922>`)
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        }  else if (User1Jogo === User2Jogo) {
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`${user} tirou \`${User2Jogo}\` e o(a) ${interaction.user} tirou \`${User1Jogo}\`. O jogo empatou, mas que pena! <:emoji11:1095108653134118922>`)
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        } else {
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`${user} tirou \`${User2Jogo}\` e o(a) ${interaction.user} tirou \`${User1Jogo}\`. O vencedor é ${user}! <:emoji11:1095108653134118922>`)
                    .setTimestamp()
                    .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                    .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        }
	},
};