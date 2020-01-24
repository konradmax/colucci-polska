// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('index', data)
});

router.get('/ekspresy', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('ekspresy', data)
});



router.get('/o-nas', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('o-nas', data)
});

router.get('/kontakt', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('kontakt', data)
});

router.get('/automaty', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('automaty', data)
});

router.get('/dystrybutory', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('dystrybutory', data)
});

router.get('/pd-xxoc', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-xxoc', data)
});

router.get('/pd-ec', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-ec', data)
});

router.get('/pd-xsgrande', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-xsgrande', data)
});

router.get('/pd-larheaec', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-larheaec', data)
});

router.get('/pd-larheagrande', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-larheagrande', data)
});

router.get('/pd-kalea', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-kalea', data)
});

router.get('/pd-kreatouch', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-kreatouch', data)
});

router.get('/pd-koroprime', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-koroprime', data)
});

router.get('/pd-korintoprime', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-korintoprime', data)
});

router.get('/pd-luce', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-luce', data)
});

router.get('/pd-lucex2', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-lucex2', data)
});

router.get('/pd-lucezero', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-lucezero', data)
});

router.get('/pd-lucesnack', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-lucesnack', data)
});


router.get('/pd-lucezerosnack', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-lucezerosnack', data)
});

router.get('/pd-gsnack', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-gsnack', data)
});

router.get('/pd-whp850', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-whp850', data)
});

router.get('/pd-whp300', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-whp300', data)
});

router.get('/pd-wfp2200', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('pd-wfp2200', data)
});

router.get('/produkty', (req, res) => {

	const data = {
	title: 'COLUCCI'
	}

	res.render('produkty', data)
});



module.exports = router
