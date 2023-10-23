const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = (req, res, next) => {
	if (req.methood === "OPTIONS") {
		return next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			return res.status(401).json({ message: 'not auth' })
		}
		const decoded = jwt.verify(token, config.get('jwtSecret'))
		req.user = decoded
		next()

	} catch (e) {
		return res.status(401).json({ message: 'not auth' })
	}
}