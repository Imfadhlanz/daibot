(async () => {
switch (command) {
case 'menu':
case 'help':
const mode = selfna ? 'SELF': 'PUBLIC'
asww = await getBuffer('https://i.ibb.co/WGGTnkb/images.jpg')
var menu = `◪ *INFO*
*Follow My Instagram*
https://instagram.com/alfaqirfadl

*My Youtube*
Xyz Lann
*UNTUK FITUR TERUPDATE SILAHKAN KETIK* *dlaninfo*

╭─────≽「 *REGULATION BOT* 」
┴
┣⊱>  *PREFIX*:  「${prefix}」
┣⊱>  *NAMA USER:* *${pushname}*
┣⊱>  *TANGGAL/JAM: ${time}*
┣⊱>  *MODE*: *${mode}*
┣⊱>  *AKTIF: ${cts}*
┣⊱>  *VERSION: 1.7.1*
┬
╰────────────────────────

╭─────≽「 *ABOUT FADBOT* 」
┴
┠─≽ *${prefix}Owner*
│ _Nomer Owner_
┠─≽ *${prefix}Own*
│ _List Command Owner_
┠─≽ *${prefix}Sticker*
│ _Menampilkan Menu Stiker_
┠─≽ *${prefix}Downloader*
│ _Mendowload File Atau Media_
┠─≽ *${prefix}Donasi*
│ _Jika Berkenan Untuk Donasi_
┠─≽ *${prefix}Islami*
│ _Fitur Islami_
┠─≽ *${prefix}Group*
│ _Perintah Untuk Group_
┠─≽ *${prefix}PhotoEffect*
│ _Menjadikan Foto Lebih Baik Dengan Effect Otomaatis_
┠─≽ *${prefix}Textmaker*
│ _Membuat Teks Keren_
┠─≽ *${prefix}Stalkermenu*
│ _NgeStalk Orang :v_
┠─≽ *${prefix}Game*
│ _NgeGame Seru_
┠─≽ *${prefix}Other*
│ _MENU LAINNYA_

┬
╰────────────────────────

╭──≽「 *FITUR SIMPLE BOT* 」
┴

┠─≽ *${prefix}jadwalsholat*
│ _Melihat Jadwal Sholat_
┠─≽ *${prefix}s*
│ _Membuat Stiker Dari Foto Maupun Video_
┠─≽ *${prefix}ytmp4*
│ _Mendownload Video Mp4_
┠─≽ *${prefix}tr*
│ _Translate_

┬
╰────────────────────────

╭────≽「 *SUPPORT FADBOT* 」
┴
│➲ *MUHAMMAD FADHLAN*
│➲ *ADUL ALHY*
│➲ *FAJAR MULYAWAN*
│➲ *ALL MEMBER TBOT*
│➲ *ALL TOD*
│➲ *PENYEDIA REST API*
│➲ *CONTENT CREATOR BOT WHATSAPP*
┬
╰──≽ *Created © Fadhlan Mhmd*

`
fadlan.sendMessage(from, asww, image, {quoted:msg, caption:menu})
 break
			case 'setfake':
		if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if(!q) return reply('Masukan Teksnya kak :v')
				fakenya = q
				Kirim.FakeStatus(from, 'Sukses Mengganti Fake: '+ fakenya, fakenya) 
			break	
			case 'runtime':
			case 'test':
				Kirim.FakeGroup(from, cts, fakenya)
            break
			case 'pink':
				const timestamp = speed();
                const latensi = speed() - timestamp 
                child =` \`\`\`Loaded Message\`\`\`             
\`\`\` - [ IPHONE 12 PRO MAX ] HANDPHONE\`\`\`
\`\`\` - [ Baterai ]  ${baterai.battery} ${batrenya}\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
				//console.log(child)
				Kirim.FakeGroup(from, child, fakenya)
            break  
			case 'afk':
                                if (!msg.key.fromMe) return
				if (!AFK.isAfk) {
				AFK.lastseen = Math.round((new Date()).getTime() / 1000);
					if (args[0] !== '') { AFK.reason = args.join(' '); }
					Kirim.FakeStatus(from,'*Saya Sekarang Offline!*' + (AFK.reason !== false ? ('\n*' + 'Alasan*' +': ' + AFK.reason) : ''),fakenya);
					AFK.isAfk = true;
				}
            break
			case 'self':
			if (!msg.key.fromMe) return
			if(selfna) return Kirim.FakeStatus(from, 'This Is Self!!!', fakenya) 
				selfna = true
				Kirim.FakeStatus(from, 'Mode Self Aktif!!!', fakenya) 
			break
			case 'public':
			if (!msg.key.fromMe) return
			if(!selfna) return Kirim.FakeStatus(from, 'This Is Public!!!', fakenya) 
				selfna = false
				Kirim.FakeStatus(from, 'Mode Public Aktif!!!', fakenya) 
			break
			case 'hidetag':
					if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
					if (!isGroup) return reply(warn.errorne.onGroup)
					var value = q
					var group = await fadlan.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: msg
					}
					fadlan.sendMessage(from, options, text)
			break		
			case 'upswteks':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (!q) return Kirim.FakeStatus(from, 'Isi teksnya!', fakenya)
				fadlan.sendMessage('status@broadcast', `${q}`, extendedText)
				Kirim.FakeStatus(from, `Sukses Up Story Teks : ${q}`, fakenya)
			break
			case 'upswimage':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedImage) {
				const swne = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fadlan.downloadMediaMessage(swne)
				fadlan.sendMessage('status@broadcast', gas, image, { caption: `${q}` })
				bur = `Sukses Upload Story Image dengan Caption : ${q}`
				fadlan.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break
			case 'upswvideo':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedVideo) {
				const swne = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fadlan.downloadMediaMessage(swne)
				fadlan.sendMessage('status@broadcast', gas, video, { caption: `${q}` }) 
				bur = `Sukses Upload Story Video dengan Caption : ${q}`
				fadlan.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break	
		case 'clone':
				try{
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Clone!!!')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				namanya = fadlan.contacts[mentag] != undefined ? fadlan.contacts[mentag].vname || fadlan.contacts[mentag].notify : undefined			
				resultpp = await fadlan.getProfilePicture(mentag)
				bufferna = await getBuffer(resultpp)
				fadlan.updateProfilePicture(fadlan.user.jid, bufferna)	
				fadlan.updateProfileName(namanya)	
				} catch {
				 reply('ppnya gak ada kak!!!')
				}	
			break
			case 'kick':
				
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (fadhlankhun.reply_message !== false) {
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fadlan.sendMessage(from, `Berhasil Telah Mengeluarkan @${fadhlankhun.reply_message.data.participant.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [fadhlankhun.reply_message.data.participant]}})
		        }, 4000)
				setTimeout( () => {
			        fadlan.groupRemove(from, [fadhlankhun.reply_message.data.participant]).catch((e)=>{return reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else if(fadhlankhun.reply_message === false && fadhlankhun.mention !== false){
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Kick')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fadlan.sendMessage(from, `Berhasil Telah Mengeluarkan @${mentag.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [mentag]}})
		        }, 4000)
				setTimeout( () => {
			        fadlan.groupRemove(from, [mentag]).catch((e)=>{return reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else{
					reply('Format Salah!!!, Pastikan tag/reply untuk mengkick!!!')
				}
			break
			case 'exec':
			        if (!isOwner) return reply(warn.errorne.fad)
					if (!q) return reply('Kata perintahnya apa?')
					var user = os.userInfo().username;
					exec(q, async (err, stdout, stderr) => {
					if (err) {
						return reply('```' + user + ':~# ' + q + '\n' + err + '```');
					}      
					return reply('```' + user + ':~# ' + q + '\n' + stdout + '```');
					});
				break
			case 'addvn':
		  		if (!isQuotedAudio) return reply('❌ reply audionya om ❌')
         			if (!q) return reply('Teksnya mana kak?')
				reply(warn.mess.wait)
				ekspor = `./src/dbvn/${q}.mp3`
				let pasar = dabes.data.audio[q]
				if(pasar.word === true) return reply('Kata Sudah Terdaftar Didalam Database!!!')
				pasar.output = ekspor
				pasar.word = true
				dabes.save()
				encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				gass = await  fadlan.downloadMediaMessage(encmedia)
				fs.writeFileSync(ekspor, gass)
				Kirim.FakeStatus(from, 'Berhasil menambahkan vn kedalam database dengan kata: ' + q, fakenya)
       			 break
			case 'getvn':
          			if (!q) return reply('Teksnya mana kak?')
				cek = dabes.data.audio
				if (cek[q].output === undefined) return reply('Kata Tidak Ditemukan')
				reply(warn.mess.wait)
				hasil = cek[q].output
				console.log(hasil)
				fadlan.sendMessage(from, fs.readFileSync(hasil), audio, {quoted: msg, mimetype: 'audio/mp4', ptt: true})
        		break
			case 'listvn':
         			 let mntul = dabes.data.audio
				 kuy = Object.keys(mntul).map(v => '- ' + v).join('\n').trim()
				 Kirim.FakeStatus(from, 'List vn yang terdaftar di database\n' + kuy, fakenya)
        		break
			case 'delvn':
         			let delvn = dabes.data.audio
				 if (delvn[q].output === undefined) return reply('Kata Tidak Ditemukan')
				 hapus = delvn[q].output
				 fs.unlinkSync(hapus)	 
				 delete delvn[q]
				 dabes.save()
				 Kirim.FakeStatus(from, 'Berhasil menghapus vn di dalam database dengan kata: ' + q, fakenya)
			break
			case 'vn':
				if(!q) return reply('Masukan kata on/off kak :v')
				if((args[0]) === 'on'){
					if(nopref) return reply('vn tanpa prefix sudah aktif kak')
					nopref = true
					Kirim.FakeStatus(from, 'Sukses mengaktifkan vn tanpa prefix', fakenya)
				}else if((args[0]) === 'off'){
					if(!nopref) return reply('vn tanpa prefix sudah tidak aktif kak')
					nopref = false
					Kirim.FakeStatus(from, 'Sukses menonaktifkan vn tanpa prefix', fakenya)
				} else {
					reply('On untuk mengaktifkan, Off untuk menonaktifkan')
				}
			break
			// tambahan
			case 'admin':
            case 'owner':
            case 'creator':
                  fadlan.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: msg})   
                  break
              case 'tagall':
					if (!isGroup) return reply(warn.errorne.onGroup)
					if (!isGroupAdmins) return reply('Khusus Admin Njeng') 
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'leave': 
				if (!isGroup) return reply(warn.errorne.onGroup)
				if (!isOwner) return reply(warn.errorne.fad)
				await reply(from, 'bye').then(() => fadlan.groupLeave(from))
					break 
			case 'd':
			if (!isGroup) return reply(warn.errorne.onGroup)
                       if (!isGroupAdmins) return reply('ADMIN DOANG LU SIAPA?')
                        if (!isBotGroupAdmins) return reply('Jadiin aku admin kak!:v')
					fadlan.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'join':
                if (!isOwner) return await reply('Btw,lu siapa???')
                if (isGroup) return await reply('Maap, command hanya untuk private')
                if (args.length == 0) return await reply('Reply Link Grupnya!!')
                var link = args[0].replace("https://chat.whatsapp.com/", "")
                fadlan.acceptInvite(link)
                break 
                case 'grup':
		        case 'group':
                if (!isGroup) return reply('*Buat Grup Todd*')
                if (!isBotGroupAdmins) return reply('*Jadiin Gw Admin Ngntd!*')
                if (!isGroupAdmins) return reply('*Bentar bentar, lu siapa dah?*')
                if (args[0] === 'fadlan') {
				reply(`BERHASIL MEMBUKA GROUP`)
                 fadlan.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'ira') {
                reply(`BERHASIL MENUTUP GROUP`)
				fadlan.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                
					
                  
                  // noted
			default:
				if (budy.startsWith('>')){
				try {
				return fadlan.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: msg})
			} catch(err) {
				e = String(err)
				reply(e)
				}
			}
		}
})();

//move to plugins folder :)
