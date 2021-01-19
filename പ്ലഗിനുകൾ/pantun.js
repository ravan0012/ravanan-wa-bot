let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nThere is a small child playing rock,\nStones were thrown into the sumur,\nLearning is timeless,\nAlso regardless of age.\n *Bye Instagram:* @__mr_ravanan",
" *PANTUN:*\n\nPlant the beans in the morning,\nGrows six withered a stick,\nThe bad of people should not be sought,\nWhen you are fasting.\n *Bye Instagram:* @__mr_ravanan",
" *PANTUN:*\n\nAt the end of the month you get a salary, a salary to buy diamonds, be diligent in praying and reciting the Koran, don't forget fasting and zakat.\n *Bye Instagram:* @__mr_ravanan",
" *PANTUN:*\n\nTime lists the last day,\nTime feels a lot wasted,\nYou don't have to worry,\nmy love is only for you.\n*Bye Instagram: *@__mr_ravanan",
]
