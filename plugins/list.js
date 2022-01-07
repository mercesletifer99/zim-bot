const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 ___________ᴢɪᴍ ʙᴏᴛ______________☜☞
┇🎗️ .xmedia
┃💖 It is a plugin with more than 25 media tools._ 
┣☢☛☞☞☞☞☞☞☞☞☞®𝔡𝔯𝔦𝔭𝔰
┃🎗️ .audio command
┃💖 Bot send all bgm commands 
┣☢☛☞☞☞☞☞☞☞☞☞®𝔡𝔯𝔦𝔭𝔰
┃🎗️ .ownercmnd
┃💖 set of commands for bot user or sudo_
┣☢☛☞☞☞☞☞☞☞☞☞®𝔡𝔯𝔦𝔭𝔰
|🎗️ .codtts
 💖 language code to change the voice in .tts & also for .trt translation_ 
├☢☛☞☞☞☞☞☞☞☞☞♻𝔡𝔯𝔦𝔭𝔰
┇🎗️ .adan 
┇💖 Finds prayer time._ 
┇💬 Eg:- : .prayer <city>
┣☢☛☞☞☞☞☞☞☞☞☞♻𝔡𝔯𝔦𝔭𝔰
┇🎗️ .rename 
┇💖 [object Object]_ 
┣
┇🎗️ .revoke
┣
┆🎗️ .git
┃💖 it send bot making git
┣
┇🎗️ .print 
┃💖 Prints the inside of the file on the server._ 
┣
┃🎗️ .bashmedia 
┃💖 Sends audio, video and photos inside the server._ 
┃💬 Eg:- : video.mp4 && media/gif/pic.mp4
┣
┃🎗️ .addserver
┃💖 Uploads image, audio or video to the server._ 
┣
┃🎗️ .term1 
┃💖 Allows to run the command on the server's shell._ 
┣
┃🎗️ .findvid
┃💖 Shows the technical information of the replied video._ 
┣
┃🎗️ .pm 
┃💖 Sends a private message to the replied person._ 
┣
┃🎗️ .s 
┃💖 Sends a private voice message to the respondent._ 
┣
┃🎗️ .anime
┃💖 random anime image _ 
┣
┃🎗️ .apkmod
┣
┃🎗️ .fatp
┣
┃🎗️ .ttp 
┃💖 Converts text to plain painting._ 
┣
┃🎗️ .attp 
┃💖 Adds rainbow effect to the text as a sticker._ 
┣
┃🎗️ .bob 
┃💖 Make text on sponge bob's board_ 
┣┎━━━━━━━━━━━━━━━━━━━━━━━━━━━━━𝔡𝔯𝔦𝔭𝔰
┃🎗️ .slot 
☤💖 Mini game for you_ 
☤
☤🎗️ .gura 
☤💖 Create gawr gura text_ 
☤
☤🎗️ .harta 
☤💖 Create random texts_ 
☤
☤🎗️ .rip 
☤💖 Please provide an image link for the effect to be applied (Apply death effect)_ 
☤
☤🎗️ .qrcode 
☤💖 Create random texts_ 
☤
☤🎗️ .nulis 
☤💖 Create random texts_ 
☤
☤🎗️ .sand 
☤💖 Create random texts_ 
❚
❚💝 .bgm 
❙💖 turn on and turn off bgm. -bot owner command_ 
❚💬 Eg:- : .bgm on / off
❚
❙🎗️ .carbon
❚💖 It sends carbon picture_ 
❙
❚🎗️ .warn
❙💖 warning message_ 
❙❒❒❒ ᴅʀɪᴘꜱᴍᴇᴍᴇꜱ ❒❒❒❞
🎗️ .bgm 
💖 change reply message BGM mode_ 
💬 Eg:- : .bgm one / two

🎗️ .git 
💖 owner number_ 

🎗️ .mp3
💖 Converts video to sound._ 

🎗️ .photo
💖 Converts the sticker to a photo._ 

🎗️ .mp4
💖 Converts animated stickers to video._ 

🎗️ .doc 
💖 CONVERT TO DOCUMENT AND ADD GIVEN NAME_ 
💬 Eg:- :.doc pinky *replace pinky with desired name*

🎗️ .dict 
💖 Use it as a dictionary.
Eg: .dict en_US;lead
 For supporting languages send *.lngcode*

🎗️ .meme 
💖 Photo memes you replied to.

🎗️ .welcome
💖 It sets the welcome message. If you leave it blank it shows the welcome message._ 

🎗️ .goodbye
💖 Sets the goodbye message. If you leave blank, it show's the goodbye message._ 

🎗️ .antilink 
💖 Activates the Antilink tool._ 
💬 Eg:- : .antilink on / off

🎗️ .mediafire 

🎗️ .moretxt
🍒 more txtit commands_ 

🎗️ .ffire 
💖 add your text to random freefire logo_ 

🎗️ .emo 
💖 emogi to png_ 

🎗️ .notes
💖 Shows all your existing notes._ 

🎗️ .save 
💖 Reply a message and type .save or just use .save <Your note> without replying_ 

🎗️ .deleteNotes
💖 Deletes *all* your saved notes.

🎗️ .owner
💖 shows the detail of bot owner

🎗️ .jid 
💖 Giving user's JID.

🎗️ .random 
💖 word image_ 

🎗️ .brdmore 
💖 add readmore before your text

🎗️ .rdmore 
💖 add readmore before your text

🎗️ .removebg 
💖 Removes the background of the photos._ 

🎗️ .report 
💖 Sends reports to group admins._ 

🎗️ .get 

🎗️ .scan 
💖 Checks whether the entered number is registered on WhatApp._ 

🎗️ .trt
💖 It translates with Google Translate. You must reply any message._ 
💬 Eg:- : .trt tr it (From Turkish to Italian)

🎗️ .detectlang
💖 Guess the language of the replied message._ 

🎗️ .currency

🎗️ .tts 
💖 It converts text to sound._ 

🎗️ .song 
💖 Uploads the song you wrote._ 

🎗️ .video 
💖 Downloads video from YouTube._ 

🎗️ .sing 
💖 It sings song that you have written_ 

🎗️ .song 
💖 Uploads the song you wrote for ios users._ 

🎗️ .wiki 
💖 Searches query on Wikipedia._ 

🎗️ .img 
💖 Searches for related pics on Google._ 

🎗️ .github 
💖 Collects github information from the given username.
⌨️ Example: .github phaticusthiccy_ 
 
🎗️ .lyric 
💖 Finds the lyrics of the song._ 

🎗️ .covid 
💖 Shows the daily and overall covid table of more than 15 countries._ 

🎗️ .sweather 
💖 Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p._ 

🎗️ .compliment 
💖 It sends complimentry sentenses_ 

🎗️ .hmod 
💖 Finds mod apps from happymod_ 

🎗️ .insult 
💖 It sends insulted words_ 

🎗️ .movie 
💖 Shows movie info._ 

🎗️ .joke 
💖 It sends random jokes_ 

🎗️ .roll
💖 roll dise 

🎗️ .owner
💖 shows the detail of bot owner_ 

🎗️ .quote 
💖 It shares famous quotes_ 

🎗️ .ss 
💖 Takes a screenshot from the page in the given link._ 

🎗️ .setvar
💖 It send setvars of bot 

🎗️ .encrpt 
💖 Text encryption using base64._ 
💬 Eg:- : .b64en <text>

🎗️ .show 
💖 Get info related to tv series and shows_ 

🎗️ .ig 
💖 Fetches user informations from instagram_ 

🎗️ .animesay 
💖 It writes the text inside the banner the anime girl is holding_ 

🎗️ .changesay 
💖 Turns the text into the change my mind poster._ 

🎗️ .trumpsay 
💖 Converts the text to Trump's tweet._ 

🎗️ .pdf 
💖 Converts a Site into PDF_ 

🎗️ .bgm 
💖 turn on and turn off bgm. -bot owner command_ 
💬 Eg:- : .bgm on / off

🎗️ .autosticker 
💖 turn on and turn off bgm. -bot owner command_ 
💬 Eg:- : .sticker on / off

🎗️ .sudo 
💖 changes sudo numbers_ 
💬 Eg:- : .sudo *your number*

🎗️ .caption 
💖 changes all captions_ 
💬 Eg:- : .caption *Made by DripsMemes*

🎗️ .number 
💖 change user number_ 
💬 Eg:- : .number *Made by DripsMemes*

🎗️ .deployer 
💖 change user name_ 
💬 Eg:- : .deployer *Made by DripsMemes*

🎗️ .handlers 
💖 changes handlers_ 
💬 Eg:- : .handler ^[.!] 

🎗️ .botname 
💖 change your bot name_ 
💬 Eg:- : .botname *name* 

🎗️ .theri  
💖 change your theri commands_ 
💬 Eg:- : .theri command,command

🎗️ .sticker
💖 It converts your replied photo or video to sticker._ 

🎗️ .ffpack
💖 Free Fire logo maker_ 

🎗️ .ffpack
💖 Free Fire logo maker_ 

🎗️ .alive
💖 Does bot work?_ 

🎗️ .sysd
💖 Shows the system properties._ 

🎗️ .tagadmin
💖 Tags group admins._ 

🎗️ .txtit
💖 Shows text to image tools with unlimited access._ 

🎗️ .antibadword 
💖 turn on & off anti-badword To remove members when they use bad words_ 
💬 Eg:- : .antibadword on / off

🎗️ .a 
💖 Converts audio to sound recording._ 

🎗️ .unvoice
💖 Converts audio to sound recording._ 

🎗️ .update
💖 Checks the update._ 

🎗️ .update now
💖 It makes updates._ 

🎗️ .wallpaper
💖 It sends high resolution wallpapers._ 

🎗️ .wame 
💖 Get a link to the user chat._ 

🎗️ .rwarn
💖 Warning message 0_ 

🎗️ .weather 
💖 Shows the weather._ 

🎗️ .speedtest
💖 Measures Download and Upload speed._ 

🎗️ .ping
💖 Measures your ping._ 

🎗️ .short 
💖 Shorten the long link._ 

🎗️ .calc 
💖 Performs simple math operations._ 

🎗️ .sendi
💖 Download status from wa_ 

🎗️ .sendv
💖 Download status from wa_ 

🎗️ .whois
💖 Displays metadata data of group or person._ 
`}) 

}));
