const { REST, Routes } = require('discord.js');
const Colors = require('colors');

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID } = process.env;

const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, "Commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = []

for (const file of commandsFiles){
    const command = require(`./Commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: '10'}).setToken(TOKEN);

(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`.yellow);
        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID),
	        { body: commands },
            console.log(`${commands.length} registrados com sucesso!`.green)
        )
    } catch (error){
        console.error(error.red);
    }
})();