(async () => {
			switch(command){
				case 'sfile':	
					if (!q) return reply('Teksnya mana kak?')
					respo = await getJson(`https://fazone-api.herokuapp.com/api/sfile?apikey=${apikey}&search=${q}`)
            				result = respo.result
					let pilem = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian : ${q}*\n\n─────────────────`
					for (let i = 0; i < result.length; i++) {
						pilem += `\n\nTitle : *${result[i].title}*\nLink : *${result[i].link}*`
					}
					Kirim.FakeStatus(from, pilem, fakenya)
				break	
        case 'sfiledl':
          if (!q) return reply('Urlnya mana kak?')
          req = await getJson(`https://fazone-api.herokuapp.com/api/sfiledl?url=${q}&apikey=${apikey}`)
          titel = req.title
          hasil = req.result
          gas = await getBuffer(hasil)
          fadlan.sendMessage(from, gas, MessageType.document, {mimetype: 'application/octet-stream', filename: `${titel}`, quoted: msg})
        break  
        case 'ssweb':
          if (!q) return reply('Urlnya mana kak?')
          req = `https://fazone-api.herokuapp.com/api/ssweb?url=${q}&apikey=${apikey}`
          Kirim.FileDariUrl(from, req, msg, 'Ini kak :v')
        break
	case 'tts':
if (args.length < 1) return fadlan.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa`, text, {quoted: msg})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return fadlan.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: msg})
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan Om')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply('Error Om')
				fadlan.sendMessage(from, buffer, audio, {duration: 9999999, quoted: msg, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				break  
				case 'quotes':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolApi}`) 
				jam = `「 BY 」 : ${anu.result.by}\n\n「 QUOTES 」 : ${anu.result.quote}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'quotesdilan':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolApi}`) 
				jam = `「 QUOTES 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'faktaunik':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/faktaunik?apikey=${LolApi}`) 
				dapzz = `FAKTA UNIK : ${anu.result}`
				fadlan.sendMessage(from, dapzz, text, {quoted: msg})
				break
				case 'katakatabijak':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${LolApi}`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'randompantun': 
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${LolApi}`) 
				jam = `「 RANDOM PANTUN 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'randombucin':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=${LolApi}`) 
				jam = `「 RANDOM BUCIN 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
			   case 'katakatabucin':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${LolApi}`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'randomnama':
				reply(warn.mess.wait) 
				anu = await getJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolApi}`) 
				jam = `「 NAMA 」 :\n\n${anu.result}`
				fadlan.sendMessage(from, jam, text, {quoted: msg})
				break
				case 'memeindo':
				case 'darkjoke':
				case 'estetik':
				reply(warn.mess.wait)
				anu = await getJson(`https://api.lolhuman.xyz/api/meme/memeindo${command}?apikey=${LolApi}`) 
				oyy = await getBuffer(anu.result)
				fadlan.sendMessage(from, oyy, image, {quoted: msg})
				break
				case 'ceritapendek':
				reply(warn.mess.wait) 
				anu = await getJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${LolApi}`)
				t = anu.result
				buffer = await getBuffer(d.thumbnail)
				pndek = `[ CERITA PENDEK ]\n\n\nTitle : ${t.title}\nPengarang : ${t.pengarang}\nKategori : ${t.kategori}\nStory : ${d.story}`
				fadlan.sendMessage(from, buffer, image, {quoted: msg, caption: pndek})
				break
				case 'ceritahoror':  
				reply(warn.mess.wait) 
				anu = await getJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${LolApi}`)
				d = anu.result
				buffer = await getBuffer(d.thumbnail)
				horor = `[ CERITA HOROR ]\n\n\nTitle : ${d.title}\nDeskripsi : ${d.desc}\nStory : ${d.story}`
				fadlan.sendMessage(from, buffer, image, {quoted: msg, caption: horor})
				break 
				case 'bokep':
               imeg = await fadlan.prepareMessage(from, fs.readFileSync('./but/fake.jpg'), image)
               imeg.message.imageMessage.viewOnce= true

               fadlan.sendMessageFromContent(from, {viewOnceMessage:{message: imeg.message, viewOnce: true}}, {viewOnce:true})
               break
				
				
				
			}
			
		})();		
//Other BY Fadln
