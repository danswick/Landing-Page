/* -------------------------------------------
   HOME PAGE ROUTE ANIMATIONS
   ------------------------------------------- */

var mountainTarget = document.querySelector('.mountain-background');
var mountainRoute = document.querySelector('.mountain-route');
function mountainClick() {
	var innerFill = document.querySelector('.mountain-background');
	innerFill.classList.toggle('mountain-background-clicked');
	var text = document.querySelector('.work-text');
	text.classList.toggle('text-animate');
	mountainRoute.classList.toggle('mountain-route-animate');
}
mountainTarget.addEventListener('click', function() {
	mountainClick();
});

var treeTarget = document.querySelector('.tree');
var treeRoute = document.querySelector('.tree-route');
function treeClick() {
	var innerFill = document.querySelector('.tree-inner');
	innerFill.classList.toggle('tree-inner-clicked');
	var text = document.querySelector('.words-text');
	text.classList.toggle('text-animate');
	treeRoute.classList.toggle('tree-route-animate');
}
treeTarget.addEventListener('click', function() {
	treeClick();
});

var pondTarget = document.querySelector('.pond');
var pondRoute = document.querySelector('.pond-route');
function pondClick() {
	var innerFill = document.querySelector('.pond-inner');
	innerFill.classList.toggle('pond-inner-clicked');
	var text = document.querySelector('.about-text');
	text.classList.toggle('text-animate');
	pondRoute.classList.toggle('pond-route-animate');
}
pondTarget.addEventListener('click', function() {
	pondClick();
});


/* -------------------------------------------
   MAKE THE MARKER DANCE! 
   ------------------------------------------- */
var markerTarget = document.querySelector('.top-marker');
var clickBox = document.querySelector('.marker-click-box');
clickBox.addEventListener('click', function() {
	/*alert("marker was clicked, dude");*/
	pondClick();
	treeClick();
	mountainClick();
	markerTarget.classList.toggle('marker-clicked');
	markerTarget.classList.toggle('click-me');
	clickBox.classList.toggle('click-me');
});

