var route = require('wayfarer')('/')
var fs = require('fs')
var events = require('./lib/events.js')
var xhr  = require('hyperquest')
var mustache  = require('mustache')
var concat = require('concat-stream')
var catchLinks = require('catch-links')

var template = fs.readFileSync('public/templates/details.html', 'utf8')

route.on('/', function () {})
route.on('templates/details', function () {
  events()
})

route.on('artist/:name', function (params) {
  var reqStream = xhr('http://' + location.hostname + ':' + location.port  + '/api/artist/' + params.name)
  var concatStrem = concat(handler)
  reqStream.pipe(concatStrem)

  function handler (data) {
    data = data.toString('utf8')
    data = JSON.parse(data)

    var html = mustache.render(template, data)
    document.body.innerHTML = html

    console.log(data)
  }

})
catchLinks(window, function (href) {
  route(href.split('.')[0])
});
