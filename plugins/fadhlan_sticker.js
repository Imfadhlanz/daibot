(async () => {
			switch(command){
				case 's':
					if (isMedia && !msg.message.videoMessage || isQuotedImage){
					const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					const dlfile = await fadlan.downloadMediaMessage(getbuff)
					const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
					Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
					} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)){
					const getbuff = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
					const dlfile = await fadlan.downloadMediaMessage(getbuff)
					const bas64 = `data:video/mp4;base64,${dlfile.toString('base64')}`
					Kirim.VideoJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})	 
					} else {
					reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
					}
				break
				case 'snobg':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlan = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/removebg?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlan),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
							fs.unlinkSync(file_fadlan)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                break
				case 'scircle':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlan = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/circle?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlan),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
							fs.unlinkSync(file_fadlan)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                break
					
		case 'sfirewm': //By Fadhlan Gans
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlan = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/photofunia/burningfire?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlan),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                           fs.unlinkSync(file_fadlan)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

		case 'rmbgg': //By Fadhlan Gans
			case 'removebg':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/removebg?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                           fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case 'nobg': //By Fadhlan Gans
				case 'removebg2':
                    if ((isMedia && !msg.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/removebg?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag sticker yang sudah dikirim`)
                    }
                    break
				case 'trigger': //By Fadhlan Gans
				case 'triggered':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/trigerv2?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            gas = fs.writeFileSync('trigerB.gif',body,'binary')
							ffmpeg('trigerB.gif')
                             .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"])
                             .videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
                             .save('trigerA.webp')
            .                on('end', async () => {
                              fadlan.sendMessage(from, fs.readFileSync('trigerA.webp'), sticker, {quoted: msg})
                              });
                        });
                    } else if ((isMedia && !msg.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/trigerv2?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            gas = fs.writeFileSync('trigerB.gif',body,'binary')
							ffmpeg('trigerB.gif')
                             .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"])
                             .videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
                             .save('trigerA.webp')
            .                on('end', async () => {
                              fadlan.sendMessage(from, fs.readFileSync('trigerA.webp'), sticker, {quoted: msg})
                              });
                        });
                    } else {
                        reply(`Kirim gambar/stiker dengan caption ${prefix + command} atau tag gambar/stiker yang sudah dikirim`)
                    }
                    break
				case 'trigger2': //By Fadhlan Gans
				case 'triggered2':
                    if ((isMedia && !msg.message  .videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://lolhuman.herokuapp.com/api/creator1/trigger?apikey=${LolApi}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                           fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case 'wntd': //By Fadhlan Gans
				case 'wanted':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/wantedv2?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

				case 'wstd': //By Fadhlan Gans
				case 'wasted':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/wastedv2?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

				case 'delete': //By Fadhlan Gans
				case 'del':
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/delete?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break


                case 'wasted2':
                    if ((isMedia && !msg.message  .videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlann = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://api.lolhuman.xyz/api/editor/wasted?apikey=${LolApi}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlann),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlann)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
			case 'rain': //By Fadhlan Gans
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                        file_fadlan = await fadlan.downloadAndSaveMediaMessage(encmedia);
                        request({
							url: `https://fazone-api.herokuapp.com/api/rain?apikey=${apikey}`,
							method: 'POST',
							formData: {
								"img": fs.createReadStream(file_fadlan),
							},
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(file_fadlan)
                            gas = new Buffer.from(body, 'binary')
							bas64 = `data:image/jpeg;base64,${gas.toString('base64')}`
							Kirim.GambarJadiStiker(from, bas64, msg, {author: 'Fadhlan Gans', pack: 'SELF'})
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break	
			}	
		})();	
