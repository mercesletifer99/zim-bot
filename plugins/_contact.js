const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Billie_E [OWNER]\n' // full name
            + 'ORG:Billie_E;\n' //
            + 'ORG:Billie_E;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=263714561176:+263 71 456 1176\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Billie_E [OWNER]", vcard: vcard}, MessageType.contact)
}))
