let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* Dona la Sala Hp es Hora del Compe
𝑩𝑶𝑻 𝑾𝑨𝑳𝑳•𝑬`, null, {
mentions: [a, b]
})}
handler.help = ['donarsala']
handler.tags = ['group']
handler.command = ['donarsala']
handler.group = true
handler.admin = true
export default handler
