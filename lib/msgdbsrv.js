const app = require("express")()
const http = require('http')

const db = []

app.route('/api/chat')
	.get((req, res) => {
		if(req.header() != {"Authentication": {"API-KEY": "381-294-448-113-19475"}}) return false
		res.send(db)
		res.end()

		console.log('GET request caught on internal DB server. Is it server request?')
	})
	.post((req, res) => {
		if(req.header() != {"Authentication": {"API-KEY": "381-294-448-113-19475"}}) return false // If API key does not match, abort request
		db.push(req.body()) // Update database
		res.send(db) // Send new database
		res.end()

		console.log('PUT request caught on internal DB server. Is it server request?')
	})

const dbsrv = http.createServer(app)

dbsrv.listen(12500, '127.0.0.1')

dbsrv.on('listening', () => {
	const dbaddr = dbsrv.address()
	const addandport = dbaddr?.address + ':' + dbaddr?.port
	process.stdout.write('Internal message DB server using HenryImpl (1.0.0-DEV) started and listening on: ' + addandport + '\n')
})