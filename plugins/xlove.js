const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/O4lVccf.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: ZIM-BOT*


*Creator number : wa.me/27634090203?text=Hii%20DripsMemes%20Sir.%20*

 
 *To check update .update   To update Bot .update now*

 
 *Bot making video : https://www.youtube.com/channel/UC2hESq6BCRMCU-LKpl7Oq8g*
     

*Instagram id: https://www.instagram.com/zim_hot_chicks_official?utm_medium=copy_link*

 
 *ZIM-BOT ZIM-TECHS NGEI UCHIRAMBA*

 
 
 *githublink : coming soon *

 
 *Zimbot created by Drips Memes follow me subcribe to my youtube channell for more info*
`}) 

}));
