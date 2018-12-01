import "../scss/style.scss";
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
require('bootstrap');

document.querySelector('.btn').addEventListener('click', function(){
	alert('Hello World');
});