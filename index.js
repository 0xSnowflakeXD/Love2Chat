// const api_impl = require('./lib/api-impl-1-0-0') // requiring without '.js' works!
const server = require('./server')
const requiredir = require('requiredir')
requiredir('./lib')