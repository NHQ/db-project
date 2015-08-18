var route = require('wayfarer')('/')
var fs = require('fs')
var events = require('./lib/events.js')
window.xhr   = require('hyperquest')

var template = fs.readFileSync('public/templates/details.html', 'utf8')

route.on('/', function () {})
route.on('templates/details', function () {
  events()
})

route.on('artist/:name', function (params) {
  document.body.innerHTML = templates
})

route(location.pathname.split('.')[0])
