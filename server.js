var http 				= require('http')
var ecstatic 		= require('ecstatic')
var path 				= require('path')
var fs 					= require('fs')
var level 			= require('level')
var formidable 	= require('formidable')
var utils 			= require('util')
var router 			= require('router')()	
var db 					= level('./db')
var server 			= http.createServer(handler)

var static		= ecstatic({root: __dirname + '/public'})

router.post('/', function (req, res) {

	var form = new formidable.IncomingForm()

	form.uploadDir = __dirname + '/tmp'
	
	form.parse(req, function (err, fields, files) {

		// set key
		var key = fields.inventoryNumber
		
		db.put(key, JSON.stringify(fields), function (err) {
			if (err) {
				console.log(err)
			}
			else {
				res.writeHead(304, {'location': 'http://localhost:11001'})
			}
			// read the database and log response
			res.end()
		})
	})
})

// get ID's
router.get('/inventory/:id', function (req, res) {
	var key 	= req.params.id
	
	db.get(key, function (err, value) {
    if (err) return console.log(err) 
    console.log(utils.inspect(JSON.parse(value)))
		res.end(value)
	})
})

// server handler function
function handler (req, res) {
	
	router(req, res, function () { static(req, res)})
}

server.listen(11001, function () {
	console.log('server listening on http://localhost:11001')
})
