(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
