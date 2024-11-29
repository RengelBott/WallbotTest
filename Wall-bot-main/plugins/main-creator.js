let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Lalito ❄️;;\nFN:Lalito ❄️\nORG:Lalito ❄️\nTITLE:\nitem1.TEL;waid=50375104555:50375104555\nitem1.X-ABLabel:Lalito ❄️\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Lalito ❄️\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
