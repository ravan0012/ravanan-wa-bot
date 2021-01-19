let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~MR RAVANAN*
https://youtube.com/c/MrRavanan
using *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

just type

5) $git clone https://github.com/mrravanan/kannapi-2.0.git
6) $ls
7) $cd kannapi-2.0

next step
8) npm i
9) node index.js

_Bisa kalian liat tutorialnya di_
*tutorials:*
https://youtube.com/c/MrRavanan
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

