const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("617152221070491658");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**- Hoşgeldiniz To United. :umbrella:**`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
