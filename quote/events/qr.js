const qrcode = require("qrcode-terminal");

module.exports = async function(client, qr) {

	qrcode.generate(qr, { small: true });
}