const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    moderatorOnly: true,
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Desbanir um membro do servidor.")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName("userid")
                .setDescription("ID do Discord do usuário que você deseja desbanir.")
                .setRequired(true)
        ),

    async execute(interaction) {
        const { channel, options } = interaction;

        const userId = options.getString("userid");

        try {
            await interaction.guild.members.unban(userId);

            const embed = new EmbedBuilder()
                .setDescription(`Sucesso ao desbanir o ususário pertencente ao id ${userId} do servidor!`)
                .setColor(0x5fb041)
                .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

            await interaction.reply({
                embeds: [embed],
            });
        } catch (err) {
            console.log(err);

            const errEmbed = new EmbedBuilder()
                .setDescription(`Forneça um ID de membro válido.`)
                .setColor(0xc72c3b)
                .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

           await interaction.reply({ embeds: [errEmbed], ephemeral: true });
        }
    }
}