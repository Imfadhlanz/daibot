const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
const { pesane } = require('./lib/msgcustom')	
const { getJson, getBuffer,getRandom } = require("./lib/getdata");
const moment = require("moment-timezone")
const chalk = require('chalk')
const fs = require('fs-extra')
const { spawn, exec, execSync, spawnSync } = require("child_process")
const speed = require('performance-now')
const request = require("request");
const axios = require('axios')
const FormData = require('form-data')
const { Readable, Duplex } = require('stream');
const tebakan = require('./lib/tebak')
const path = require('path')
const os = require('os')
//const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
//ffmpeg.setFfmpegPath(ffmpegPath);
const FadhlanKhun = JSON.parse(fs.readFileSync('./f4dhl4n/apake.json'))
const { listsurah } = require('./f4dhl4n/listsurah')
// Vcard
const vcard = 'BEGIN:VCARD\n'  //Jangan diganti,Ntar error
            + 'VERSION:3.0\n'  //Jangan diganti,Ntar error
            + 'FN: Fadhlan\n'  // Ganti jadi namamu
            + 'ORG:Pengembang ${namabot};\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6285781187685:+6285781187685\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // Jangan diganti,Ntar Error
// Function Owner
nomerowner = FadhlanKhun.nomerlu
nomer2 = FadhlanKhun.nomer2
namabot = FadhlanKhun.bot
namaowner = FadhlanKhun.nama


// COLOR
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

///Function batrai
baterai = {
	battery: "" || "Tidak terdeteksi",
isCharge: "" || false}

///Function
selfna = true
fakenya = 'fadhlankhun'
apikey = 'GaluhTbit'
LolApi = 'genbotkey' //beli apikey di api.lolhuman.xyz//
var AFK = {
    isAfk: false,
    reason: false,
    lastseen: 0
};
nopref = false
//

	
module.exports = fadlan = async (fadlan, msg) => {
	try {
        if (!msg.hasNewMessage) return
        msg = msg.messages.all()[0]
		if (!msg.message) return
		if (msg.key && msg.key.remoteJid == 'status@broadcast') return
        msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
        const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(msg.message)[0]        
        const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const fadhlankhun = new pesane(fadlan, msg)
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		bodos = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
		const nopre = bodos.slice(0).trim().split(/ +/).shift().toLowerCase()
		const argz = bodos.trim().split(/ +/).slice(1)
		const q = args.join(' ')
		const botNumber = fadlan.user.jid
		const isGroup = from.endsWith('@g.us')
		const ownerNumber = [`${nomerowner}@s.whatsapp.net`]
		let sender = isGroup ? msg.participant : msg.key.remoteJid
		const totalchat = await fadlan.chats.all()
		const groupMetadata = isGroup ? await fadlan.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const getGroupAdmins = (participants) => {
			admins = []
			for (let i of participants) {
			i.isAdmin ? admins.push(i.jid) : ''
			}
			return admins
		}
		// mentions
		const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? fadlan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : fadlan.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
          }
          // bapk ngentd
      if (!isCmd && msg.message) { 
			for (let i of totalchat) { 
			fadlan.updatePresence(i.jid, Presence.recording) 
			} 
			}
			const sleep = async (ms) => {
			return new Promise(resolve => setTimeout(resolve, ms));
			}
			// akhir
        const isOwner = ownerNumber.includes(sender)
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const myname = msg.key.fromMe ? fadlan.user.jid : fadlan.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = msg.key.fromMe ? fadlan.user.name : myname.notify || myname.vname || myname.name || '-'
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
		const isQuotedMessage = type === 'extendedTextMessage'
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const detstick = type === 'stickerMessage' && msg.message.stickerMessage.contextInfo != null ? msg.message.stickerMessage.contextInfo.participant || "" : ""
		function waktune(seconds){
		function pad(s){
			return (s < 10 ? '0' : '') + s;
		}
		var hours = Math.floor(seconds / (60*60));
		var minutes = Math.floor(seconds % (60*60) / 60);
		var seconds = Math.floor(seconds % 60);
		return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
		}
		const waktos = process.uptime()
		const cts = waktune(waktos) 
		function secondsToHms(d) {
			d = Number(d);
			var h = Math.floor(d / 3600);
			var m = Math.floor(d % 3600 / 60);
			var s = Math.floor(d % 3600 % 60);

			var hDisplay = h > 0 ? h + (h == 1 ? " " + " Jam" + ", " : " " + " Jam" + ", ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " " + " Menit" + ", " : " " + " Menit" + ", ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " " + " Detik" : " " + " Detik") : "";
			return hDisplay + mDisplay + sDisplay; 
		}		
		
		const reply = async (teknya) => {
			return fadhlankhun.sendMessage(teknya, MessageType.text, {quoted: fadhlankhun.data})
		}	 
		
		warn = {
			errorne: {
				wFormat: 'Format Salah!!!, Silahkan Cek Kembali...',
				onGroup: 'Khusus Di Grup!!!',
				onSelf: 'Only Self!!!'
			},
			mess: {
				wait: 'Tunggu Sebentar!'
			}
		}
		
		dabes = new (require('./lib/database'))(`dabes.json`, null, 2)
		if (!dabes.data.users) dabes.data = {
		  users: {},
		  audio: {},
		}
		let audy = dabes.data.audio[q]
        	if (typeof audy !== 'object') dabes.data.audio[q] = {}
		eval(fs.readFileSync('./lib/afk.js', 'utf8'))	
		if (msg.key.fromMe) {
			if (AFK.isAfk && !fadhlankhun.id.startsWith('3EB0')) {
				AFK.lastseen = 0;
				AFK.reason = false;
				AFK.isAfk = false;
				Kirim.FakeStatus(from,'*Saya Tidak Lagi Offline!*',fakenya);
			}
		}
		
		
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if(!msg.key.fromMe && selfna) return
		tebakan(fadlan, msg, prefix)
		fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                eval(fs.readFileSync('./plugins/' + plugin,  'utf8'));
            }
        });
	var sendgas = ''
		fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
				if(body.toLowerCase() === prefix + 'listcmd') {
				var gayane = ''
				fs.readFileSync('./plugins/' + plugin,  'utf8').split(/case +/).forEach( item => {
				let login = prefix + item.split(':')[0]
				gayane += login.replace('(async () => {','').replace('switch(command){', '').replace(/\r\n\t\t\t/gi,'').replace(/\r\n\t\t\t\t/gi,'').replace(/\n/gi,'').replace(/\t/gi,'').replace(/''/gi,'\n').replace(/'/gi,'')+ '\n'
				});
				sendgas += gayane.replace(prefix, '\n================\n' + plugin + '\n================').replace('switch (command) {','') 
				}
            }
        });
		
		if(body.toLowerCase() === prefix + 'listcmd') {
			keterangan = '*「 LIST COMMAND 」*\n'
			fadlan.sendMessage(from, keterangan + sendgas, text, {quoted: msg})
		}	
		
		if(nopref && dabes.data.audio[budy]){
			if(dabes.data.audio[budy].word === true){
			hasil = dabes.data.audio[budy].output
			fadlan.sendMessage(from, fs.readFileSync(hasil), audio, {quoted: msg, mimetype: 'audio/mp4', ptt: true})
			}
		}
	fadlan.on("CB:action,,battery", json => {
	  const battery  = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
	  baterai.powersave = json[2][0][1].powersave
        })

        batrenya = baterai.isCharge ? 'C H A R G I N G' : 'N O T  C H A R G I N G'
        casnya = baterai.powersave ? 'O N' : 'O F F'
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s' + e)
        }
	// console.log(e)
	}
}

///Jika Edit Disini Maka Harus Restart Bot Ulang Secara Manual...
