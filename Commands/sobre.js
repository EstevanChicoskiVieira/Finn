const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sobre')
		.setDescription('Sobre o Finn.'),

	async execute(interaction) {
        const oi = new EmbedBuilder()
            .setColor('#7b359c')
            .setTitle('Um pouco sobre o Finn 🗡')
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            .setThumbnail('https://media.discordapp.net/attachments/1074354811861995590/1114725924190048286/latest.png?width=446&height=479')
            .setDescription(`
                Olá! Eu sou **Finn, o humano.** Eu moro na Terra de Ooo, e vivo milhares de aventuras junto de meu irmão, o Jake, e juntos somos os heróis destas terras. Eu sempre estou próximo de meus amigos, Bmo, Princesa Jujuba, Marceline, Rei gelado, Dona Tromba, e é claro, o Jake. Eu amo comer as tortas de maçãs da Dona Tromba, dar socos na cara de vilões, se aventurar em masmorras, minha comida favorita é bolo de carne, minha cor preferida é roxo, eu tenho Deuteranopia, que é um tipo de daltonismo, e eu amooo muito se aventurar junto de meu irmão, o Jake.
            `)
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

		interaction.reply({ embeds: [oi] })
	},
};