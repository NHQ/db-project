var http 						= require('http')
var ecstatic 				= require('ecstatic')
var path 						= require('path')
var fs 							= require('fs')
var level 					= require('level')
var sublevel 				= require('level-sublevel')
var formidable 			= require('formidable')
var utils 					= require('util')
var router 					= require('router')()	
var db 							= sublevel(level('./db'))
var inventorydb 		= db.sublevel('inventory')
var artistdb 				= db.sublevel('artist')
var sellerdb 				= db.sublevel('seller')
var server 					= http.createServer(handler)

var static		= ecstatic({root: __dirname + '/public'})

router.post('/post', function (req, res) {

	var form = new formidable.IncomingForm()

	form.uploadDir = __dirname + '/tmp'
	
	form.parse(req, function (err, fields, files) {
		// set key
		var key = fields.inventoryNumber
		
		db.put(key, JSON.stringify(fields), function (err) {
			if (err) {
				console.log(err)
				res.end()
			}
			else {
				res.writeHead(302, {'Location': '/'})
				res.end()

				// check for inventory number
				inventorydb.get(fields.inventoryNumber, function (err, index) {
					if (err) {
						console.log('New Inventory Number')

						var entry = [{id: key, title: fields.workTitle, artist: fields.artist}]
						inventorydb.put(fields.inventoryNumber, function (err) {
							if (err) console.log(err)
						})
					}
					else {
						var entry = {id: key, title: fields.workTitle, artist: fields.artist}
						index = JSON.parse(index)
						index.push(entry)
						inventorydb.put(fields.inventorydb, JSON.stringify(index), function (err) {
							if (err) console.log(err)
						})
					}
				})

				// check for artist
				artistdb.get(fields.artist, function (err, index) {
					if (err) {
						console.log('New artist')

						var entry = [{id: key, title: fields.workTitle}]
						artistdb.put(fields.artist, JSON.stringify(entry), function (err) {
							if (err) console.log(err)
						})
					}
					else {
						var entry = {id: key, title: fields.workTitle}
						index = JSON.parse(index)
						index.push(entry)
						artistdb.put(fields.artist, JSON.stringify(index), function (err) {
							if (err) console.log(err)
						})
					}
				})

				// check for seller
				sellerdb.get(fields.seller, function (err, index) {
					if (err) {
						console.log('New Seller')

						var entry = [{id: key, title: fields.workTitle, artist: fields.artist}]
						sellerdb.put(fields.invoiceSeller, JSON.stringify(entry), function (err) {
							if (err) console.log(err)
						})
					}
					else {
						var entry = {id: key, title: fields.workTitle, artist: fields.artist}
						index = JSON.parse(index)
						index.push(entry)
						sellerdb.put(fields.invoiceSeller, JSON.stringify(index), function (err) {
							if (err) console.log(err)
						})
					}
				})
			}
			// read the database and log response
			res.end()
		})
	})
})

// get ID's
router.get('/inventory/:id', function (req, res) {
	res.writeHead(200, {'content-type': 'application/JSON'})
	var key 	= req.params.id
	
	db.get(key, function (err, value) {
    if (err) return console.log(err) 
    console.log(utils.inspect(JSON.parse(value)))
		res.end(value)
	})
})

// get artist
router.get('/api/artist/:id', function (req, res) {
	res.writeHead(200, {'content-type': 'application/JSON'})
	var artist = req.params.id

	artistdb.get(artist, function (err, index) {
		if (err) return console.log(err)
		console.log(utils.inspect(JSON.parse(index)))
		res.end(index)
	})
})

// get seller
router.get('/seller/:id', function (req, res) {
	res.writeHead(200, {'content-type': 'application/JSON'})
	var seller = req.params.id

	sellerdb.get(seller, function (err, index) {
		if (err) return console.log(err)
		console.log(utils.inspect(JSON.parse(index)))
		res.end(index)
	})
})

// server handler function
function handler (req, res) {
	
	router(req, res, function () { static(req, res)})
}

server.listen(11001, function () {
	console.log('server listening on http://localhost:11001')
})
