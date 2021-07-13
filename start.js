const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const CFonts = require('cfonts')
const chalk = require('chalk')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// COLOR
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
 
//BANNER
console.clear()
CFonts.say('fadlanBOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`SELF WA BOT BY F4D4L4N\nJust For Fun :v`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

require('./handler.js')
nocache('./handler.js', module => console.log(`${module} Telah Di Perbarui Silahkan Restart Botnya!!!`))

const start = async (sesi) => {
	const fadlan = new WAConnection()
	global.fadlan = fadlan
	fadlan.browserDescription = ['F4D4L4N','browser','9999']
	fadlan.version = [2, 2119, 6]
    fadlan.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), 'SCAN QR TO CONNECT')
    })

    fs.existsSync(`./${sesi}.json`) && fadlan.loadAuthInfo(`./${sesi}.json`)
    fadlan.on('connecting', () => {
        console.log(color('Connecting...', 'red'))
    })
    fadlan.on('open', () => {
        console.log(color('Connected...', 'green'))
    })
    await fadlan.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${sesi}.json`, JSON.stringify(fadlan.base64EncodedAuthInfo(), null, '\t'))

    fadlan.on('chat-update', async (message) => {
	require('./lib/fadlan');    
        require('./handler.js')(fadlan, message)
    })
}

if (!process.argv[2]){
rl.question('Enter Session Name: ', (answer) => {
      console.log('  ')
  if (!fs.existsSync(`./${answer}.json`)){
  console.log(color('[ CLIENT ]'), 'CREATING NEW CLIENT NAME: '+ answer)
  } else {
  console.log(color('[ CLIENT ]'), 'Connecting to SESSION NAME: '+ answer)
  }
  sessionname = answer
   rl.close();
start(sessionname)
});
} else if (process.argv[2]){
    sessionname = process.argv[2]
  console.log('  ')
   if (!fs.existsSync(`./${sessionname}.json`)){
  console.log(color('[ CLIENT ]'), 'CREATING NEW CLIENT NAME:'+ sessionname)
  } else {
  console.log(color('[ CLIENT ]'), 'Connecting to SESSION NAME: '+ sessionname)
}
start(sessionname)
 rl.close();
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
