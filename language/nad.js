exports.wait = () => {
	return`*「❗」ESPERA*`
}

exports.succes = () => {
	return`*「 HECHO 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」SU NIVEL SIGUE VACÍO*`
}

exports.lvlnoon = () => {
	return`*「❗」LOS NIVELES NO SE HAN ACTIVADO*`
}

exports.noregis = () => {
	return`*「❗」SINVERIFICACIÓN「❗」*\n\nTIPO : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY PERO, PERO USTED ESTA VETADO :V*`
}

exports.premium = (prefix) => {
	return`¡Esta función es exclusivamente para usuarios premium!
	Actualizar a premium primero mi jefe
	Si los intereses se pone en contacto con mi propietario
tipo : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Has hecho una verificación-_-*`
}

exports.stikga = () => {
	return`*「 Fallo 」Intente responder/volver a etiquetar*`
}

exports.linkga = () => {
	return`*「❗」lo siento el enlace no es válido*`
}

exports.groupo = () => {
	return`*「❗」SOLO EN GRUPOS*`
}

exports.ownerb = () => {
	return`*「❗」SOLO DUEÑO DEL BOT*`
}

exports.ownerg = () => {
	return`*「❗」SOLAMENTE DUEÑO DEL GRUPO*`
}

exports.admin = () => {
	return`*「❗」SOLAMENTE ADMINS*`
}

exports.badmin = () => {
	return`*「❗」BOT NO ES ADMIN*`
}

exports.bug = () => {
	return`*El problema ha sido reportado al propietario del BOT, informes falsos/main2 no serán respondidos*`
}

exports.wrongf = () => {
	return`*「🗿」Donde esta el texto?*`
}

exports.clears = () => {
	return`*éxito mi jefe*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 Informacion 」*
\`\`\`➸ Nombre : ${pushname}\`\`\`
\`\`\`➸ Numero : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Nivel : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Lo siento ${pushname} los limites de hoy se han acabado*
*Límite de restablecimiento cada hora 24:00*

\`\`\`Actualización Premium ilimitada\`\`\`
\`\`\`➸ 20K : 1 luna\`\`\`
\`\`\`Si está interesado, póngase en contacto con el propietario\`\`\`
\`\`\`Enviar comando : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 Conteo de limites 」*
su límite restante es : ${isPrem ? '9999' : `${limitCounts}`}

La actualización premium de mi jefe, seamos libres de usar bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ Nombre : ${pushname}
┃│➸ Numero : ${sender.split("@")[0]}
┃│➸ Dinero : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONACIONES*
Mensaje a : +1 769 444-7624
PayPal : https://www.paypal.me/SpecialWeek

Donar para mantener los bots actualizados y activos`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *anuncio ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *LISTA DE ALQUILERES Y CREAR BOTS :*
◯ *alquilar : 5$/GRUP (luna)*
◯ *Paga : 10$ (PODRÍA SER PROPIETARIO)*
◯ *EL PAGO PUEDE SER A TRAVÉS DE :*
◯ *Paypal*
──────────────────────────────
◯ *VENTAJAS DEL ALQUILER DE BOTS :*
◯ *1. PUEDE INSERTAR BOTS EN UN GRUPO*
◯ *2. PUEDE UTILIZAR FUNCIONES PREMIUM*
◯ *BENEFICIO PARA UN BANCO :*
◯ *1. PUEDE SER EL PROPIETARIO DEL BOT EN SÍ*
◯ *2. PUEDE CAMBIAR EL NOMBRE DE SU PROPIO BOT*
◯ *3. PUEDE LLEVAR BOTS A UN GRUPO*
◯ *4. PUEDE UTILIZAR EL PROPIETARIO DEL COMANDO*
◯ *5. PUEDE ALQUILAR EL BOT DE VUELTA*
──────────────────────────────
◯ *SI LO ANTERIOR INTERESA A LA PUBLICIDAD*
◯ *POR FAVOR LLAME AL NÚMERO A CONTINUACIÓN :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}