const { Router } = require('express')
const Link = require('../models/Link')
const config = require('config')
const router = Router()
const shortid = require('shortid')
const auth = require('../middleware/auth.middleware')

router.post('/generate', auth, async (req, res) => {
	try {
		const baseUrl = config.get('baseUrl')
		const { from } = req.body
		const code = shortid.generate()
		const existing = await Link.findOne({ from })
		if (existing) {
			return res.json({ link: existing })
		}
		const to = baseUrl + '/t/' + code
		const link = new Link({
			code, to, from, owner: req.user.userId
		})
		await link.save()
		return res.status(201).json({ link })
	} catch (e) {
		console.log(e)
		res.status(500).json({ message: 'something error' })
	}
})
router.get('/', auth, async (req, res) => {
	console.log(req.params.id)
	try {
		const links = await Link.find({ owner: req.user.userId })
		return res.json(links)
	} catch (e) {
		console.log(e)
		res.status(500).json({ message: 'something error' })
	}
})
router.get('/:id', auth, async (req, res) => {
	console.log(req.params.id)
	try {

		const link = await Link.findById(req.params.id)
		return res.json(link)
	} catch (e) {
		console.log(e)
		res.status(500).json({ message: 'something error' })
	}
})


module.exports = router