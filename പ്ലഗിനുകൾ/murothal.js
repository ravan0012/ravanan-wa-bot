let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
QUR'AN BOT:
Via Copas {SEBARKAN}

*YouTube:*
_~https://youtube.com/c/MrRavanan_

learn termux basic ⇨ https://youtu.be/y1encEbGuAM
How to create what's app bot ⇨ https://youtu.be/swWgfse4viw
paid instagram bot for free daily/150+ followers⇨ https://youtu.be/cNCMXThkpd4
 MR-SPAM what's app tool ⇨ https://youtu.be/onx8Vwdl-cU
 how to get us phone number⇨ https://youtu.be/b75ZNT6mlFQ
how to unfollow peoples in instagram⇨ https://youtu.be/hnxd-j4erZM
info gathering instagram ⇨ https://youtu.be/vuqS_JE8neM
instagram spam comment tool termux⇨ https://youtu.be/ltvJ5MI7Z2c
Trase location⇨ https://youtu.be/dWk2-oFvlEE
Termux tutorials playlist⇨ https://youtube.com/playlist?list=PLXI_OgWidZkWteWpz5wfttOd3lmYmHBCY
INSTAGRAM TRICKS PLAYLIST⇨ https://youtube.com/playlist?list=PLXI_OgWidZkWjIXlfkQ8HpF8dUJ46vJza
Fake number tutorials playlist⇨ https://youtube.com/playlist?list=PLXI_OgWidZkU35XPL64coDqNMEtktTJwR
`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

