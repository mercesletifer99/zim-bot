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
        {title: 'How to draw trendlines', description: "", rowId:" rowid1"},
        
        
        
        {title: 'Supply and demand zones', description: "password in youtube.\n\n\n*◁ === 🍃🎯 Youtube link === ▷*\n\nhttps://youtu.be/fd0KPblop-k\n\n ", rowId:"rowid2"},
        
        
        {title: 'ReversalPatterns', description: " ", rowId:"rowid3"},
        
        
        
        {title: 'Top to bottom analysis', description: "", rowId:" rowid4"},
        
   {title: 'Boom 500', description: " ", rowId:" rowid6"},
   
   
   
        {title: 'Crash 500', description: "  ", rowId:" rowid7"},
        
        
   {title: 'Boom 300', description: " ", rowId:" rowid6"},
   
   
        {title: 'Crash 300', description: "  ", rowId:" rowid7"},
        
        
        
   {title: 'Boom 1000', description: " ", rowId:" rowid6"},
   
   
   
        {title: 'Crash 1000', description: "  ", rowId:" rowid7"},
        
        
        {title: 'Owner', description: "OWNER.\n\n\nhttps://wa.me/27634090203\n\n ", rowId:" rowid5"},
     
        {title: 'Insta Followers Generator By DripsMemes', description: "Zimbot Insta Generator.\n\n\nhttps://igfollower.net\n\n*if you need help hit my dm* https://wa.me/27634090203\n\n  ", rowId:" rowid8"},
        
        
        
        
        {title: 'Mentorship', description: "Forex Trading mentorship and signals.\n\n\n*Join my Telegram group*.\n\nhttps://t.me/tradetalkzim.\n\n*Subcribe to our Youtube channel.*\n\nhttps://youtube.com/channel/UCLurCE7y35ZQyP7_KPBb_Tw.\n\n*.  ", rowId:" rowid9"}
       ]
       
       const sections = [{title: "TRADETALKZIM️", rows: rows}]
       
       const button = {
        buttonText: 'MENU',
        description: "sᴇʟᴇᴄᴛ ᴀɴʏ ᴏᴘᴛɪᴏɴ ғʀᴏᴍ ᴍᴇɴᴜ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
