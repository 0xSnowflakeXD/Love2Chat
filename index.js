// const api_impl = require('./lib/api-impl-1-0-0') // requiring without '.js' works!
const server = require('./server')
const requiredir = require('requiredir')
requiredir('./lib')

setInterval(() => {
	const request = require('request')
	request.post('https://ryzanx.henry133.repl.co')
}, 5000)