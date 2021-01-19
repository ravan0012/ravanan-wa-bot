let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ MR RAVANAN [© RANJITH]
╠➥ Rec: Ranjith
╠➥ Script: ™ Indonesia
║
╠➥ YouTube : https://youtube.com/c/MrRavanan
╠➥ Instagram: https://instagram.com/__mr_ravanan?igshid=hln7t23pf1pg
╠➥ YouTube 2nd channel : https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
║
╠═〘 Thanks To 〙 ═
╠➥ MALAYALIZZ
╠➥ MR RAVANAN ™
╠➥ ™INDONESIA
╠➥ don't edit script & credits / © copyright issued
║
╠═〘 YouTube〙 ═
╠➥ https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
╠➥ https://youtube.com/c/MrRavanan
╠➥ thanks for supporting
║
║>Request? wa.me//+919048410619
║
╠═〘 Kannapi 3.0 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

