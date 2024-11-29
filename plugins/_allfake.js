import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363355898976387@newsletter",
      serverMessageId: 100,
      newsletterName: '𝑩𝑶𝑻 𝑾𝑨𝑳𝑳•𝑬',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://qu.ax/FNsw.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363355898976387@newsletter",
serverMessageId: 100,
newsletterName: '𝑩𝑶𝑻 𝑾𝑨𝑳𝑳•𝑬',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝑩𝑶𝑻 𝑾𝑨𝑳𝑳•𝑬',
body: 'Mejor Bot De WhatsApp ❄️',
previewType: "PHOTO",
thumbnailUrl: 'https://i.ibb.co/G0Jh1TW/file.jpg',
sourceUrl: 'https://www.instagram.com/lxlito.7/profilecard/',
mediaType: 1,
renderLargerThumbnail: false
},},}
	
}
