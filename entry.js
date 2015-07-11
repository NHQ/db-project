var fs		=require('fs')

var template = fs.readFileSync('public/templates/details.html', 'utf8')

form			= document.querySelector('#input')
artist		= document.querySelector('[name=artist]')
workTitle	= document.querySelector('[name=workTitle]')
year			= document.querySelector('[name=year]')
origin		= document.querySelector('[name=origin]')
image			= document.querySelector('[name=image]')

var arr 	= [artist, workTitle, year, origin, image]

form.addEventListener('submit', function (e) {
	e.preventDefault()
	var check = arr.filter(function (el) {
		return !el.value.length
	})
	if (check.length) {
		check.forEach(function (el) {
			el.style.border = '2px solid red'
			console.log(el.getBoundingClientRect())
		})
	}
	console.log(check)
})