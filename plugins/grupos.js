let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/C30Ko22H05eBpj1l5eyrc3*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*💮 𝓝𝓮𝔃𝓾𝓴𝓸𝓑𝓸𝓽 💮*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
