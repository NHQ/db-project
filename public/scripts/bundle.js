(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// var template = fs.readFileSync('public/templates/details.html', 'utf8')


var windowWidth = document.body.clientWidth;
var navInfo     = document.querySelector('.nav').querySelectorAll('.data-link');
var dataList    = document.querySelector('.data-list-wrap').querySelectorAll('.list');
var menuToggle  = document.querySelector('#menu-toggle');
var navWrap     = document.querySelector('.nav-wrapper');

// event listeners
[].forEach.call(navInfo, function (el, i) {
  el.addEventListener('click', function () {
    dataList[i].classList.toggle('show')

    if (windowWidth <= 768) {
      if (navWrap.classList.contains('show')) { navWrap.classList.remove('show') }
      if (menuToggle.classList.contains('on')) { menuToggle.classList.remove('on') }
    }
  })
})

menuToggle.addEventListener('click', function () {
  this.classList.toggle('on')
  navWrap.classList.toggle('show')
})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MC4xMi43L2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8vIHZhciB0ZW1wbGF0ZSA9IGZzLnJlYWRGaWxlU3luYygncHVibGljL3RlbXBsYXRlcy9kZXRhaWxzLmh0bWwnLCAndXRmOCcpXG5cblxudmFyIHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbnZhciBuYXZJbmZvICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0YS1saW5rJyk7XG52YXIgZGF0YUxpc3QgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1saXN0LXdyYXAnKS5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xudmFyIG1lbnVUb2dnbGUgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XG52YXIgbmF2V3JhcCAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXdyYXBwZXInKTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzXG5bXS5mb3JFYWNoLmNhbGwobmF2SW5mbywgZnVuY3Rpb24gKGVsLCBpKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGRhdGFMaXN0W2ldLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xuICAgICAgaWYgKG5hdldyYXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHsgbmF2V3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JykgfVxuICAgICAgaWYgKG1lbnVUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKSB7IG1lbnVUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnb24nKSB9XG4gICAgfVxuICB9KVxufSlcblxubWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvbicpXG4gIG5hdldyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG59KSJdfQ==
