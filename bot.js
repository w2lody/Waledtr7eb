const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("535229239306354698");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**:heartCopy: Hoşgeldiniz To Mlk. :3_~1: **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
