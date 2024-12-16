global.namaown = "𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚" // JANGAN DI UBAH
global.namabot = "𝑹𝒊𝒂𝒔 𝑪𝒓𝒂𝒔𝒉" // JANGAN DI UBAH
global.versisc = "𝟐" // JANGAN DI UBAH
global.owner = ["2348165846414"] // MASUKIN NO LU
global.tele = "https://whatsapp.com/channel/0029Vao1R2n9sBIC9sPhvI1P" // JANGAN DI UBAH
global.url = "https://whatsapp.com/channel/0029Vao1R2n9sBIC9sPhvI1P" // JANGAN DI UBAH
global.namastore = "𝑻𝒐𝒙𝒙𝒊𝒄" // UBAH NAMA STORE LU
global.simbol = "ᯤ" // BEBAS UBAH SIMBOL SESUAI SELERA LU
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

global.mess = {
    success: '_*𝑻𝒂𝒔𝒌 𝑫𝒐𝒏𝒆 𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚*_',
    admin: '_*𝑻𝒉𝒊𝒔 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝒊𝒔 𝒇𝒐𝒓 𝑨𝒅𝒎𝒊𝒏𝒔 𝒐𝒏𝒍𝒚*_',
    botAdmin: '_*𝑹𝒊𝒂𝒔 𝑪𝒓𝒂𝒔𝒉 𝑴𝒖𝒔𝒕 𝒃𝒆 𝑨𝒅𝒎𝒊𝒏*_',
    OnlyOwner: '_*𝑻𝒉𝒊𝒔 𝒊𝒔 𝒇𝒐𝒓 𝑴𝒚 𝑶𝒘𝒏𝒆𝒓 𝑺𝒐𝒓𝒓𝒚*_',
    OnlyGrup: '_*𝑻𝒉𝒊𝒔 𝒊𝒔 𝒇𝒐𝒓 𝑮𝒓𝒐𝒖𝒑 𝑪𝒉𝒂𝒕 𝑶𝒏𝒍𝒚*_',
    private: '_𝑻𝒉𝒊𝒔 𝒊𝒔 𝒇𝒐𝒓 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕 𝒐𝒏𝒍𝒚*_',
    wait: '_*𝑳𝒐𝒂𝒅𝒊𝒏𝒈*_',
    notregist: '_*You are not registered in the Bot Database. Please register first._*',
    premium: '_*𝑰𝑭 𝒀𝑶𝑼 𝑾𝑨𝑵𝑻 𝑷𝑹𝑬𝑴𝑰𝑼𝑴 𝑪𝑶𝑵𝑻𝑨𝑪𝑻 𝑻𝑯𝑬 𝑶𝑾𝑵𝑬𝑹_*',
    endLimit: '_*Your daily limit has been reached, the limit will be reset every day at 00:00 W.A.T_*.',
     bugrespon: `\`[ ♋︎ ] 𝑹𝑰𝑨𝑺 𝑰𝑺 𝑲𝑰𝑳𝑳𝑰𝑵𝑮 𝑻𝑨𝑹𝑮𝑬𝑻...`,
     donebug: `\`[ ♋︎ ]\` 𝑻𝑨𝑹𝑮𝑬𝑻 𝑲𝑰𝑳𝑳𝑬𝑫 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐁𝐘 𝐑𝐈𝐀𝐒 𝐂𝐑𝐀𝐒𝐇`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})