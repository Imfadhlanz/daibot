(async () => {
			switch(command){
				case 'play':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fzn-guys.herokuapp.com/api/ytplay2?apikey=gege&judul=${q}`)
					thumb = req.image
					info = `*「 PLAY 」*\n\n➸ *Judul* : ${req.title}\n➸ *Durasi* : ${req.duration}\n➸ *Filesize* : ${req.size}\n➸ *Ext* : MP3\n\n_*Music Sedang Dikirim*_`
					hasil = req.result
					Kirim.FileDariUrl(from, thumb, msg, info)
					Kirim.FileDariUrl(from, hasil, msg)
				break	
				case 'pinterest':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/pinterest?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break	
				case 'image':
					if(!q) return reply('Masukan Teksnya kak :v')
					req = await getJson(`https://fazone-api.herokuapp.com/api/googleimg?apikey=${apikey}&q=${q}`)
					info = `Ini kak :v`
					hasil = req.result
					rand = hasil[Math.floor(Math.random() * hasil.length)]
					Kirim.FileDariUrl(from, rand, msg, info)
				break
				case 'ig':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fzn-guys.herokuapp.com/api/igdl?apikey=gege&url=${q}`)
						cptr = `*IG DOWNLOADER*\n\n*➸ Nama :* ${req.result.fullname}\n*➸ User :* ${req.result.username}\n*➸ Caption :* ${req.result.caption}`
						if (req.error) return reply(req.error)
						fadlan.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						Kirim.FileDariUrl(from, req.result.url, msg, cptr)
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break					
                 	case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await getJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await fadlan.sendMessage(from, thumbnail, image, { quoted: msg, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await fadlan.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: msg })
                    break  
                    case 'ytmp4':  
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${LolApi}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}\n`
                    ini_txt += `By Fadhlan Gans`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    fadlan.sendMessage(from, ini_buffer, image, { quoted: msg, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    fadlan.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: msg})
                    break 
                    case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case `tiktod`:
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${LolApi}&url=${ini_url}`
                    get_result = await getJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await fadlan.sendMessage(from, ini_buffer, video, { quoted: msg })
                    break 
                    case 'stickerwm':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        filePath = await fadlan.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolApi}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            fadlan.sendMessage(from, ini_buff, sticker, { quoted: msg }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break 
                    case 'ytmp3':  
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${LolApi}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    fadlan.sendMessage(from, ini_buffer, image, { quoted: msg, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    fadlan.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: msg})
                    break 
                    case 'b':
					try {
						if (!q) return reply('Urlnya mana kak?')
						req = await getJson(`https://fazone-api.herokuapp.com/api/fbdl?url=${q}&apikey=${apikey}`)
						if (req.error) return reply(req.error)
						fadlan.sendMessage(from, warn.mess.wait, text, {quoted: msg})
						if (req.kualitasHD) {
							buffer = await getBuffer(req.kualitasHD)
							fadlan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							} else if (req.kualitasHD == "") {
							gas = await getBuffer(req.kualitasSD)
							fadlan.sendMessage(from, gas, video, {mimetype: 'video/mp4', quoted: msg, caption: 'Nih Kak :)'})
							}
						} catch {
						reply('Mungkin Linknya Tidak Valid Kak :v')
						}
				break		
				case 'ytstalk': // gatau error kenapa
				if (!q) return reply('[❗] Sabar lagi stalking YT nya')
				anu = await getJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolApi}&query=${q}`)
				cari = '•••••••••••••••••\n'
				for (let search of anu.result) {
				cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
				}
				reply('sabar ya')
				break 
				case 'pptiktok': // bisa
                //[❗] case by FadhlanGanssssss
				reply('*sabar kak:v*')
				if (!q) return
				kntl = await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${q}?apikey=${LolApi}`)
				fadlan.sendMessage(from, kntl, image, {quoted: msg})
				break
				case 'igstalk':
				reply('[❗] Sabar lagi stalking IG nya')
				get_result = await getJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${LolApi}`)
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.photo_profile)
				fadlan.sendMessage(from, buffer, image, {quoted: msg, caption: txt})
				break 
				case 'githubstalk':
				reply('[❗] Sabar lagi stalking GitHub nya')
				get_result = await getJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolApi}`)
				get_result = get_result.result
				txt = `Full : ${get_result.name}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Publick : ${get_result.public_repos}\n`
				txt += `Public Gits : ${get_result.public_gists}\n`
				txt += `User : ${get_result.user}\n`
				txt += `Compi : ${get_result.company}\n`
				txt += `Lokasi : ${get_result.location}\n`
				txt += `Email : ${get_result.email}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.avatar)
				fadlan.sendMessage(from, buffer, image, {quoted: msg, caption: txt})
				break 
				case 'tiktokstalk':
				reply('[❗] Sabar stalking TikTok nya')
				username = args[0]
				get_result = await getJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LolApi}`)
				get_result = get_result.result
				txt = `Link : ${get_result.username}\n`
				txt += `Bio : ${get_result.bio}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.followings}\n`
				txt += `Likes : ${get_result.likes}\n`
				txt += `Vidio : ${get_result.video}\n`
				buffer = await getBuffer(get_result.user_picture)
				fadlan.sendMessage(from, buffer, image, {quoted: msg, caption: txt})
				break
                    
			}
			
		})();		
//Media BY FADHLAN
