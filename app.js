const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
app.use(express.json({ extended: true }))
app.use('/api/link', require('./routes/link.routes'))
app.use('/api/auth', require('./routes/auth.routes'))


const PORT = config.get('port') || 5000


if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}


async function start() {
	try {
		await mongoose.connect(config.get('mongoURI'), {
			useUnifiedTopology: true,

		})
		app.listen(PORT, () => {
			console.log('app')
		})
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
}
start()

