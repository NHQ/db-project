var fs		= require('fs')
// var template = fs.readFileSync('public/templates/details.html', 'utf8')


// event listeners
var navInfo     = document.querySelector('.nav').querySelectorAll('.data-link');
var dataList    = document.querySelector('.data-list-wrap').querySelectorAll('.list');
var menuToggle  = document.querySelector('#menu-toggle');
var navWrap     = document.querySelector('.nav-wrapper');

[].forEach.call(navInfo, function (el, i) {
  el.addEventListener('click', function () {
    dataList[i].classList.toggle('show')
  })
})

menuToggle.addEventListener('click', function () {
  this.classList.toggle('on')
  navWrap.classList.toggle('show')
})