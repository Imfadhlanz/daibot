(async () => {
			switch(command){
				
case 'botstat':
 case 'test':
               const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = fadlan.user.phone
				const u = '```'
                const timestampp = speed();
				const run = process.uptime() 
                const latensii = speed() - timestampp
				  let i = []
				 let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
	 for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
                stat = `「 𝙎𝙏𝘼𝙏𝙐𝙎 𝙃𝙋 𝘽𝙊𝙏 」 ${u}
 Versi Whatsapp	: ${wa_version} 
 Ram						: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB 
 Merk Hp				: ${device_manufacturer} 
 Baterai				: ${baterai.battery} ${batrenya}
 Powersave			: ${casnya}
 Versi Android	: ${os_version} 
 Model					: ${device_model} 
 Group					: ${giid.length} 
 Chat					: ${totalchat.length - giid.length} 
 Total Chat 		: ${totalchat.length}`
                reply(`${stat}`)
                break	
                case 'setthumb':
				if (!isOwner) return reply(warn.errorne.fad)
                if (!isQuotedImage) return reply('reply image nya kak!')
                const dappp = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const uhuy = await fadlan.downloadMediaMessage(dappp)
                fs.unlinkSync(`./lib/logo.jpeg`)
                await sleep(2000)
                fs.writeFileSync(`./lib/logo.jpeg`, uhuy)
                fadlan.sendMessage(from, 'Sukses Ngab!!', text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64')})
                break
			}
			
		})();		
//Pro By ln
