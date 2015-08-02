window.xhr   = require('hyperquest')
// var fs		= require('fs')

// var template = fs.readFileSync('public/templates/details.html', 'utf8')


var req  = xhr('http://localhost:11001/artist/picasso')

req.on('data', function (data) {console.log(data.toString())})