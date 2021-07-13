(async () => {
			switch(command){ 
        case 'tahta':
          if (!q) return reply('Teksnya mana kak?')
          req = `https://fazone-api.herokuapp.com/api/hartatahta?text=${q}&apikey=${apikey}`
          Kirim.FileDariUrl(from, req, msg, 'Ini kak :v')
        break

 case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
					reply(warn.mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fdhln Gans`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                        fadlan.sendMessage(from, gambar, image, { quoted: msg })
                    })
                    break
                case 'glitch':
					reply(warn.mess.wait)
				 if (args.length == 0) return reply(`Example: ${prefix + command} Fdhln Gans`)
                    txt1 = args[0]
                    txt2 = args[1]
                    req = `https://fazone-api.herokuapp.com/api/photooxy/glitch?text=${txt1}&text2=${txt2}&apikey=${apikey}`
                       Kirim.FileDariUrl(from, req, msg, 'Ini kak :v')
        break
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
					reply(warn.mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fdhln Gans`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LolApi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        fadlan.sendMessage(from, gambar, image, { quoted: msg })
                    })
                    break
          case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
					reply(warn.mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fdhln Gans`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                        fadlan.sendMessage(from, gambar, image, { quoted: msg })
                    })
                    break 
                    case 'nulis':
                //[❗] case by FADHLAN
                try {
                if (!q) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply('sabar pak')
                alan = args.join(' ')
                fadlannn = await getBuffer(`https://fzn-guys.herokuapp.com/nulis?apikey=gege&text=${q}`)
                fadlan.sendMessage(from, fadlannn, image, {quoted: msg})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('*Waduh Error Pak:v*')
				}
                break
                case 'tulis': fadlan.updatePresence(from, Presence.composing)
			if (!q) return reply(`${pushname} Harus Nulis Apa Kak??`)
			reply('sabr yaaa:v')
				  nama = q.split(":")[0];
					kelas = q.split(":")[1];
					isi = q.split(":")[2];
			Kirim.FileDariUrl(from, `https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4&apikey=jarwow645`, msg)
			break 
			
			}
			
		})();		
//Textmaker BY Fadlan
