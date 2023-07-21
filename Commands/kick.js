const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    moderatorOnly: true,
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Expulsar um membro do servidor")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Usuário que deseja expulsar.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("Por que desejaexpulsar este membro?")
        ),

    async execute(interaction) {
        const { channel, options } = interaction;

        const user = options.getUser("target");
        const reason = options.getString("reason") || "Campo \"rasão\" não preenchido.";

        const member = await interaction.guild.members.fetch(user.id);

        const errEmbed = new EmbedBuilder()
            .setDescription(`Você não pode realizar ações em ${user.username}, pois ele têm um cargo superior.`)
            .setColor(0xc72c3b)
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        await member.kick(reason);

        const embed = new EmbedBuilder()
            .setColor('Green')
            .setTitle('Expulsão realizada com sucesso')
            .setDescription(`
                Usuário expulso: **${user.username}**
                Moderador: ${interaction.user}
                
                Razão da expulsão: \`${reason}\`
            `)
            .setAuthor({ name: `Olá, ${interaction.user.username}!`, iconURL: `${interaction.user.avatarURL({ size: 1024, extension: "jpg" })}` })
            .setTimestamp()
            .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })

        await interaction.reply({
            embeds: [embed],
        });
    }
}