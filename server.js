var http = require('http')
var ecstatic = require('ecstatic')
var path = require('path')
var fs = require('fs')
var formidable = require('formidable')
var utils = require('util')
var server = http.createServer(handler)
function handler (req, res) {

	if(req.method === 'GET') {
		var stream = fs.createReadStream(__dirname + '/public/index.html', 'utf8')

		console.log(req.url)
		res.writeHead(200, {'content-type': 'text/html'})
		stream.pipe(res)
	}
	else if(req.method === 'POST') {
		var form = new formidable.IncomingForm()

		form.uploadDir = './tmp'
		
		form.parse(req, function (err, fields, files) {
			console.log(utils.inspect({files: files}))
			form.on('part', function(){console.log('got part')})
			res.writeHead(304, {'location': 'http://localhost:11001'})
			res.end()
		})
	}
}

server.listen(11001, function () {
	console.log('server listening on http://localhost:11001')
})
