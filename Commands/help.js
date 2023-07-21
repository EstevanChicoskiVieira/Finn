const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lista de comandos do Finn.'),

	async execute(interaction) {
        const oi = new EmbedBuilder()
            .setColor('#7b359c')
            .setTitle('Lista de comandos do Finn!! 📋')
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            .setThumbnail('https://cdn.discordapp.com/attachments/1074354811861995590/1114673608107769986/100.png')
            .setDescription(`
                \`f!help or /help\` - Lista de comandos
                \`f!sobre or /sobre\` - Sobre o bot
                \`f!ping or /ping\` - Retorna o ping do bot
                \`f!dados or /dados\` - Brincar com os dados
                \`f!moda or /moeda\` - Joga uma moeda
                \`f!pet or /pet\` - Tsuki, a gata do Finn
                \`f!piada or /piada\` - Conta uma piada
                \`f!meme or /meme\` - Mostra um meme
                \`f!gatinhos\` - Mostra uma foto aleatória de um gatinho
                \`/jokenpo\` - Jogar jokenpô
                \`/elogio\` - Faça um elogio para alguém
                \`/ofença\` - Ofenda alguém
                \`/hug\` - Abraçar alguém
                \`/kiss\` - Beijar alguém
                \`/cafune\` - Fazer um cafuné em alguém
                \`/slap\` - Bater em alguém
                \`/avatarpixel\` - Faça uma pixelart do perfil de algum usuário
                \`/avatar\` - Pegar o avatar de algueém
                \`/ban\` - Banir um usuário
                \`/kick\` - Expulsar um usuário
                \`/mute\` - Mutar um usuário
                \`/unban\` - Desbanir um usuário
                \`/unmute\` - Desmutar um usuário

                **Especiais: **
                \`/finn\`, \`/jake\`, \`/jujuba\`, \`/raposo\`, \`/bmo\`, \`/simon\`, \`/menta\`, \`/tromba\`, \`/gunter\`, \`/finnswords\`
            `)
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

		interaction.reply({ embeds: [oi] })
	},
};