const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dados')
		.setDescription('Um jogo de dados com algum membro do servidor')
        .addUserOption(option =>
            option.setName("user")
                .setDescription("Com quem você deseja jogar os dados?")
                .setRequired(true)
        ),

	async execute(interaction) {
        let nums = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]

        function random(items){
            let index = Math.floor(Math.random() * items.length);
            return items[index];
        };

        let User1Dado = random(nums);
        let User2Dado = random(nums);

        const { options } = interaction;
        const user = options.getUser('user');

        if (User1Dado > User2Dado){
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`
                    ${interaction.user} tirou \`${User1Dado}\` e o(a) ${user} tirou \`${User2Dado}\`. ${interaction.user} ganhou o jogo! <:emoji11:1095108653134118922>
                `)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        } else if (User2Dado > User1Dado){
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                .setColor('Random')
                    .setDescription(`
                    ${user} tirou \`${User2Dado}\` e o(a) ${interaction.user} tirou \`${User1Dado}\`. ${user} ganhou o jogo! <:emoji11:1095108653134118922>
                `)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        } else if (User1Dado == User2Dado){
            interaction.reply({ content: `${user}, ${interaction.user}`, embeds: [
                new EmbedBuilder()
                    .setColor('Random')
                    .setDescription(`
                    ${interaction.user} tirou \`${User1Dado}\` e o(a) ${user} tirou \`${User2Dado}\`. O jogo deu empate! <:emoji11:1095108653134118922>
                `)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
                .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            ] })
        }
	},
};