let handler = async m => m.reply(`
╭─「 Donation 」
│ • wa.me//+919048410619
│ • don't copy credits [ you can add command with permission ]
│ • thanks for supporting
│ 「 Chat OWNER 」
 | owner YouTube : https://youtube.com/c/MrRavanan
│ > any error to contact? wa.me//+919048410619
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
