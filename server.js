var http 		= require('http')
var ecstatic 	= require('ecstatic')
var path 		= require('path')
var fs 			= require('fs')

var level 		= require('level')
var db 			= level('./db')
var formidable 	= require('formidable')
var utils 		= require('util')
var server 		= http.createServer(handler)

var static		= ecstatic({root: __dirname + '/public'})

// server handler function
function handler (req, res) {
	
	if(req.method === 'POST') {
		var form = new formidable.IncomingForm()

		form.uploadDir = __dirname + '/tmp'
		
		form.parse(req, function (err, fields, files) {

			// construct meta-data database object
			var meta = {}

			meta.workTitle 		= fields.workTitle
			meta.artist 		= fields.artist
			meta.year 			= fields.year
			meta.origin 		= fields.origin
			meta.image 			= {}
			meta.image.name 	= files.image.name
			meta.image.path 	= files.image.path
			meta.image.type 	= files.image.type

			// set key
			var key = meta.artist + '!' + meta.workTitle
			
			db.put(key, JSON.stringify(meta), function (err) {
				if (err) {
					console.log(err)
				}
				else {
					res.writeHead(304, {'location': 'http://localhost:11001'})
				}
				// read the database and log response
				db.get(key, function (err, value) {
				    if (err) return console.log(err) 
				    console.log(utils.inspect(JSON.parse(value)))
  				})
				res.end()
			})
		})
	}
	else {
		static(req, res)
	}
}

server.listen(11001, function () {
	console.log('server listening on http://localhost:11001')
})
