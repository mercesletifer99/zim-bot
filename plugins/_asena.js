/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+919895828468
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
      
      
           
   {title: 'Step index', description: "HOW TO CALCULATE STEPSON STEP INDEX\n.https://youtu.be/yMNsMrsvmF8  ", rowId:" rowid6"},
        
   {title: 'Boom 500', description: "https://youtu.be/yFnuCcqZblA", rowId:" rowid6"},
   
   
   
        {title: 'Crash 500', description: " Coming soon ", rowId:" rowid7"},
        
        
   {title: 'Boom 300', description: "Coming soon ", rowId:" rowid6"},
   
   
        {title: 'Crash 300', description: " coming soon ", rowId:" rowid7"},
        
        
        
   {title: 'Boom 1000', description: "Coming soon ", rowId:" rowid6"},
   
   
   
        {title: 'Crash 1000', description: " Coming soon", rowId:" rowid7"},
        
        
  {title: 'How to draw trendlines', description: "Coming soon", rowId:" rowid1"},
        
        
        
        {title: 'Supply and demand zones', description: "Coming soon", rowId:"rowid2"},
        
        
        {title: 'ReversalPatterns', description: "Coming  soon", rowId:"rowid3"},
        
        
        
        {title: 'Top to bottom analysis', description: "Coming soon", rowId:" rowid4"},
        
        
        {title: 'Owner', description: "OWNER.\n\n\nhttps://wa.me/263784675236\n\n ", rowId:" rowid5"},
     
     
     
     
        {title: 'CONTACT', description: " ", rowId:" rowid8"},
        
        
        
        
        {title: 'Mentorship', description: "Forex Trading mentorship and signals.\n\n\n*Join my Telegram group*.\n\nhttps://t.me/tradetalkzim.\n\n*Subcribe to our Youtube channel.*\n\nhttps://youtube.com/channel/UCLurCE7y35ZQyP7_KPBb_Tw.\n\n*.  ", rowId:" rowid9"}
       ]
       
       const sections = [{title: "TRADETALKZIM️", rows: rows}]
       
       const button = {
        buttonText: 'MENU',
        description: "Hie trader. My name is Bot_Nyama and i will be your mentor till further notice 🙏🙏🙏.\n\n\n\n *Before we start make sure you have subscribed to my YouTubechannel*.\nhttps://youtube.com/channel/UCLurCE7y35ZQyP7_KPBb_Tw\n\n If you dont have a trading account use the link below and create an account. \n* https://record.binary.com/_Mxrjb7udl0q6tyDIijdDK2Nd7ZgqdRLk/1/  \n\n  *IF YOU WANT TO START FOREX TRADING*\n\n\n sᴇʟᴇᴄᴛ ᴀɴʏ ᴏᴘᴛɪᴏɴ ғʀᴏᴍ THE ᴍᴇɴᴜ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
