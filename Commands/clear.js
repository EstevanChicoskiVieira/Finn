const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Apague até 99 mensagens')
		.addIntegerOption(option => option.setName('amount').setDescription('Número de mensagens que deseja apagar.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
        async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: 'Você precisa inserir um número entre 1 e 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Ocorreu um erro ao tentar remover mensagens neste canal!', ephemeral: true });
		});

		return interaction.reply({ content: `Sucesso ao apagar \`${amount}\` mensagens.`, ephemeral: true });
	},
};