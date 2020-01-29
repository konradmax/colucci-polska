// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: 'smtp.colucci.pl',
	port: 465,
	auth: {
		 user: 'formularzcolucci',
		 pass: 'Formularz1!'
	}
});




router.get('/email', (req, res) => {
	const data = JSON.parse(req.query.data);
	const text = `Wysłano wiadomość od: ${data.name} \n Nr telefonu: ${data.telephone} \n Temat wiadomości: ${data.subject} \n Wiadomość: ${data.message}`;



const message = {
    from: 'formularz@colucci.pl',
		to: 'k.max@colucci.pl',
    subject: 'Wiadomość ze strony Colucci',
    text: text
	};

	transport.sendMail(message, function(err, info) {
			if (err) {
				console.log(err)
			} else {
				console.log(info);
			}

			res.json({
				status: err ? false : true,
				message: err ? err : info
			});
	});
})



module.exports = router
