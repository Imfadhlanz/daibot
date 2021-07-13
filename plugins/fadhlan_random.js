(async () => {
			switch(command){ 
        case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`).then((gambar) => {
                     fadlan.sendMessage(from, gambar, image)
                    })
                    break
			}
			
		})();		
//Random Image
//Lapor ke Owner Kalau error
