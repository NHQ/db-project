form		= document.querySelector('#input')
artist		= document.querySelector('[name=artist]')
workTitle	= document.querySelector('[name=workTitle]')
year		= document.querySelector('[name=year]')
origin		= document.querySelector('[name=origin]')
image		= document.querySelector('[name=image]')

dialog		= document.querySelector('dialog')

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
		dialog.setAttribute('open', true)
		dialog.removeAttribute('open')
		// dialog.setAttribute('close', false)
	}
	console.log(check)
})