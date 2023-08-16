/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['919947291867']
global.premium = ['919947291867']
global.packname = '\n\n\n𐄁⊰᯽⊱┈❊    ꦿꦼᴀᷝᴋⷮsᷦʜᴀⷨʏⷷꦿꦼ𑇇 ❊┈⊰᯽⊱𐄁\n\n\n'
global.author = ''
global.sessionName = 'sparrow'
global.prefa = [',','!','.','?','$','@']
global.sp = '❀'
global.mess = {
    success: '𝖘𝖚𝖈𝖈𝖊𝖘𝖘',
    admin: '𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 𝖎𝖘 𝖘𝖕𝖊𝖈𝖎𝖋𝖎𝖈𝖆𝖑𝖑𝖞 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖆𝖉𝖒𝖎𝖓𝖘!',
    botAdmin: '𝖇𝖔𝖙 𝖘𝖍𝖔𝖚𝖑𝖉 𝖇𝖊 𝖆𝖓 𝖆𝖉𝖒𝖎𝖓 𝖙𝖔 𝖕𝖗𝖔𝖈𝖊𝖘𝖘 𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉!',
    owner: '𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 𝖎𝖘 𝖘𝖕𝖊𝖈𝖎𝖋𝖎𝖈𝖆𝖑𝖑𝖞 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖔𝖜𝖓𝖊𝖗!',
    group: '𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 𝖎𝖘 𝖘𝖕𝖊𝖈𝖎𝖋𝖎𝖈𝖆𝖑𝖑𝖞 𝖋𝖔𝖗 𝖌𝖗𝖔𝖚𝖕𝖘!',
    private: '𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 𝖎𝖘 𝖘𝖕𝖊𝖈𝖎𝖋𝖎𝖈𝖆𝖑𝖑𝖞 𝖋𝖔𝖗 𝖕𝖗𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖆𝖙𝖘!',
    bot: '𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 𝖎𝖘 𝖘𝖕𝖊𝖈𝖎𝖋𝖎𝖈𝖆𝖑𝖑𝖞 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖔𝖜𝖓𝖊𝖗',
    wait: '𝖜𝖆𝖎𝖙...',
    endLimit: '𝖑𝖎𝖒𝖎𝖙 𝖗𝖊𝖆𝖈𝖍𝖊𝖉, 𝖜𝖎𝖑𝖑 𝖗𝖊𝖘𝖊𝖙 𝖆𝖙 12 𝖆𝖒!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jarvis.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
