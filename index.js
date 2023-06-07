// const api_impl = require('./lib/api-impl-1-0-0') // requiring without '.js' works!
const server = require('./birbserver')
const requiredir = require('requiredir')
requiredir('./lib')