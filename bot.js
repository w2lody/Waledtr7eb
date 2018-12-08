const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520742855321321493");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcoome To Oreo ..,:crescent_moon: __**`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
