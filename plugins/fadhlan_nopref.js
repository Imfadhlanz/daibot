(async () => {
			switch(nopre){
				
        case 'assalamualaikum':
          fadlan.sendMessage(from, 'Waalaikumsalam', text, { quoted : msg })
          break
        case 'p':
          reply('Salam Aja om')
          break 
          // aanu
          case 'bot':
          fadlan.sendMessage(from, fs.readFileSync('./but/jah.webp'), sticker, {quoted: msg})
          break
          // have fun
          case 'terganteng':
         jds = [];
          const jdiidc = groupMembers;
          const kosstc = groupMembers;
          const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)];
          teks = `Yang terganteng di grub ini adalah @${
            akuutc.jid.split("@")[0]
          }`;
          jds.push(akuutc.jid);
          mentions(teks, jds, true);
         break
  			}
			
		})();	
