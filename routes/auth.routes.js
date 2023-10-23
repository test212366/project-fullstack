const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')


router.post('/register',
	[
		check('email', 'uncorrectEmail').isEmail(),
		check('password', 'uncorrectPassword').isLength({ max: 12, min: 6 })
	]
	, async (req, res) => {
		try {
			console.log(req.body)
			const errors = validationResult(req)
			if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'uncorrect data' })
			const { email, password } = req.body

			const candidate = await User.findOne({ email })
			if (candidate) return res.status(400).json({ message: 'have user' })
			const hashedPassword = await bcrypt.hash(password, 3)
			const user = new User({ email, password: hashedPassword })
			await user.save()
			return res.status(201).json({ message: 'user created' })

		} catch (e) {
			console.log(e)
			res.status(500).json({ message: 'something error' })
		}
	})

router.post('/login', [
	check('email', 'uncorrectEmail').isEmail(),
	check('password', 'uncorrectPassword').isLength({ max: 12, min: 6 })
], async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array(), message: 'uncorrect data' })
		const { email, password } = req.body
		console.log(req.body)
		const user = await User.findOne({ email })
		if (!user) return res.status(400).json({ message: 'user notfund' })
		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) return res.status(400).json({ message: 'password error' })
		const token = jwt.sign(
			{ userId: user._id },
			config.get('jwtSecret'),
			{ expiresIn: '1h' }
		)
		return res.json({ token, userId: user.id })

	} catch (e) {
		console.log(e)
		res.status(500).json({ message: 'something error' })
	}
})

module.exports = router