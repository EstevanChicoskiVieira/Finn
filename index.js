const { Events, GatewayIntentBits, Collection, IntentsBitField, EmbedBuilder, ActivityType, PermissionFlagsBits, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ButtonStyle, ButtonBuilder } = require('discord.js')
const Discord = require('discord.js');
const Colors = require('colors');

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ] 
});

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")   
const commandsPath = path.join(__dirname, "Commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

client.commands = new Collection();

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else  {
        console.log(`Esse comando em ${filePath} está com "data" ou com "execute ausentes"`)
    } 
}

client.on(Events.InteractionCreate, async interaction =>{
    if (!interaction.isChatInputCommand()) return

    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply({ content: 'Houve um erro ao executar este comando! <:Emoji1:1095095957672173629>', ephemeral: true })
        console.log('Houve um erro ao executar um comando!'.red)
    }
})

// Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.username}.`.magenta)
});
client.login(TOKEN);

//random
function random(items){
    let index = Math.floor(Math.random() * items.length);
    return items[index];
};

//comandos
client.on('messageCreate', async (message) => {
    if(message.author.bot) return;

    if (message.content === '<@1114940560160084040>'){
        message.reply(`Olá, ${message.author}. Eu sou o Finn!`)
    } else if(message.content === 'f!ping'){
        message.reply(`Meu ping é \`${message.client.ws.ping}Ms\``)
    } else if (message.content === 'f!help'){
        message.reply({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('Lista de comandos do Finn!! 📋')
                .setAuthor({ name: `Olá, ${message.author.username}!`, iconURL: `${message.author.avatarURL({ size: 1024, extension: "jpg" })}` })
                .setThumbnail('https://cdn.discordapp.com/attachments/1074354811861995590/1114673608107769986/100.png')
                .setDescription(`
                    \`f!help or /help\` - Lista de comandos -
                    \`f!sobre or /sobre\` - Sobre o bot -
                    \`f!ping or /ping\` - Retorna o ping do bot -
                    \`f!dados or /dados\` - Brincar com os dados -
                    \`f!pet or /pet\` - Tsuki, a gata do Finn
                    \`f!piada\` - Conta uma piada
                    \`f!meme\` - Mostra um meme
                    \`f!gatinhos\` - Mostra uma foto aleatória de um gatinho
                    \`f!moda\` - Joga uma moeda -
                    \`/jokenpo\` - Jogar jokenpô -
                    \`/elogio\` - Faça um elogio para alguém -
                    \`/ofença\` - Ofenda alguém -
                    \`/abraçar\` - Abraçar alguém -
                    \`/beijar\` - Beijar alguém -
                    \`/bater\` - Bater em alguém -
                    \`/avatar\` - Pegar o avatar de algueém -
                    \`/ban\` - Banir um usuário -
                    \`/kick\` - Expulsar um usuário -
                    \`/unban\` - Desbanir um usuário -

                    **Especiais: **
                    \`/finn\`, \`/jake\`, \`/jujuba\`, \`/raposo\`, \`/bmo\`, \`/simon\`, \`/menta\`, \`/tromba\`, \`/gunter\`, \`/finnswords\`
                `)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        ] })
    } else if (message.content === 'f!sobre'){
        message.reply({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('Um pouco sobre o Finn 🗡')
                .setAuthor({ name: `Olá, ${message.author.username}!`, iconURL: `${message.author.avatarURL({ size: 1024, extension: "jpg" })}` })
                .setThumbnail('https://media.discordapp.net/attachments/1074354811861995590/1114725924190048286/latest.png?width=446&height=479')
                .setDescription(`
                    Olá! Eu sou **Finn, o humano.** Eu moro na Terra de Ooo, e vivo milhares de aventuras junto de meu irmão, o Jake, e juntos somos os heróis destas terras. Eu sempre estou próximo de meus amigos, Bmo, Princesa Jujuba, Marceline, Rei gelado, Dona Tromba, e é claro, o Jake. Eu amo comer as tortas de maçãs da Dona Tromba, dar socos na cara de vilões, se aventurar em masmorras, minha comida favorita é bolo de carne, minha cor preferida é roxo, eu tenho Deuteranopia, que é um tipo de daltonismo, e eu amooo muito se aventurar junto de meu irmão, o Jake.
                `)
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        ] })
    } else if (message.content === 'f!dados'){
        message.reply(`Você tirou o número \`${Math.floor(Math.random() * 12) + 1}\` nos dados! 🎲`)
    } else if (message.content === 'f!moeda'){
        let itens = [
            'Cara',
            'Coroa'
        ];

        message.reply(`A moeda caiu em \`${random(itens)}\``)
    } else if (message.content === 'f!gatinhos'){ 
        let gatinhos = [
            "https://media.discordapp.net/attachments/1074354811861995590/1096845009430515815/b003589ac9c9951e10ef649587c3b687.png?width=479&height=479",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845079324405861/30dc2534135f3cc09665c0befcd3edc1.png?width=479&height=479",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845156638015538/f36d63ef969c46de8edf89a760dc5d60.png?width=479&height=479",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845239253217321/5e0fba6a6944599140cba65ca8c945c0.png?width=431&height=431",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845393028980836/ec093441e2673c94bfcf610fd6533df7.png?width=386&height=386",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845683824279623/image.png?width=359&height=359",
            "https://media.discordapp.net/attachments/1074354811861995590/1096845817417043968/dd3279a07961ccf80c397f5d779e9a53.png?width=489&height=479",
            "https://media.discordapp.net/attachments/1074354811861995590/1096846128223367208/image.png?width=311&height=311"
        ]

        message.reply({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('Gatinhos <3')
                .setDescription(`Aqui, ${message.author}. Aprecie um belo gatinho!`)
                .setImage(random(gatinhos))
                .setTimestamp()
                .setFooter({ text: 'Finn, developed by Jugg P\`z', iconURL: `https://media.discordapp.net/attachments/1074354811861995590/1114678347885187152/image.png?width=346&height=346` })
        ] })
    }
});

client.on('ready', () => {
    let status = [
        "Jugg P'z",
        "Finn!!",
        "I love Jake",
        "Eu moro em Ooo",
        "Grob Gob Glob Grod",
        "Shoko??",
        "Together again",
        "Use /finn"
    ];

    function randomI(items){
        let index = Math.floor(Math.random() * items.length);
        return items[index];
    };

    setInterval(() => {
        client.user.setActivity(`${randomI(status)}`, { type: ActivityType.Streaming, url: 'https://www.twitch.tv/jeall_exe' })
    }, 1000 * 25);
    client.user.setStatus("dnd");
});

/*const prefix = "f!";

client.on('messageCreate', message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();

   if (command === 'ping') {
       message.channel.send('Pong!');
   } else if (command === 'hello') {
       message.channel.send('Olá, mundo!');
   }
});*/ //Código de comando por prefixo do ChatGPT