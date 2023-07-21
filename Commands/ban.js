const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    moderatorOnly: true,
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Banir um usuário do servidor")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false)
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Usuário que deseja banir")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("Por que deseja bani-lo?")
        ),

    async execute(interaction) {
        const { channel, options } = interaction;

        const user = options.getUser("target");
        const reason = options.getString("reason") || "Campo \"rasão\" não preenchido.";

        const member = await interaction.guild.members.fetch(user.id);

        const errEmbed = new EmbedBuilder()
            .setDescription(`Você não pode realizar ações em ${user.username}, pois ele têm um cargo superior.`)
            .setColor(0xc72c3b)
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        await member.ban({ reason });

        const embed = new EmbedBuilder()
            .setTitle('Banimento realizado com sucesso')
            .setDescription(`
                Usuário banido: **${user.username}**
                Moderador: ${interaction.user}
                
                Razão do banimento: \`${reason}\`
            `)
            .setColor(0x5fb041)
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })

        await interaction.reply({
            embeds: [embed]
        });
    }
}