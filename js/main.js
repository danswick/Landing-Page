/*window.onLoad = function() {
	var sceneSVG = document.getElementById('route-sketch');
	var svgDoc = sceneSVG.contentDocument; 
	var mountainRoute = svgDoc.getElementById('mountain-route');
	

	mountainRoute.setAttribute("class", 'mountain-route-animate');
};*/

/*var mountainTarget = document.querySelector('#mountain-background');*/
var mountainTarget = document.querySelector('.mountain-background');
var mountainRoute = document.querySelector('#mountain-route');
function mountainClick() {
	var innerFill = document.querySelector('.mountain-background');
	innerFill.classList.toggle('mountain-background-clicked');
	var text = document.querySelector('.work-text');
	text.classList.toggle('text-animate');
	if ($('.mountain-route-animate').length ) {
		$('.mountain-route-animate').remove();
	} else {
		$('#mountain-route').clone()
							.appendTo('#route-sketch')
							.removeAttr('id')
							.attr({"class": "mountain-route-animate"});
	}
}
mountainTarget.addEventListener('click', function() {
	mountainClick();
});



var treeTarget = document.querySelector('.tree');
var treeRoute = document.querySelector('#tree-route');
function treeClick() {
	var innerFill = document.querySelector('.tree-inner');
	innerFill.classList.toggle('tree-inner-clicked');
	var text = document.querySelector('.words-text');
	text.classList.toggle('text-animate');
	if ($('.tree-route-animate').length ) {
		$('.tree-route-animate').remove();
	} else {
		$('#tree-route').clone()
							.appendTo('#route-sketch')
							.removeAttr('id')
							.attr({"class": "tree-route-animate"});
	}
}

treeTarget.addEventListener('click', function() {
	treeClick();
});



var pondTarget = document.querySelector('.pond');
var pondRoute = document.querySelector('#pond-route');
function pondClick() {
	var innerFill = document.querySelector('.pond-inner');
	innerFill.classList.toggle('pond-inner-clicked');
	var text = document.querySelector('.about-text');
	text.classList.toggle('text-animate');
	if ($('.pond-route-animate').length ) {
		$('.pond-route-animate').remove();
	} else {
		$('#pond-route').clone()
							.appendTo('#route-sketch')
							.removeAttr('id')
							.attr({"class": "pond-route-animate"});
	}
}
pondTarget.addEventListener('click', function() {
	pondClick();
});




var markerTarget = document.querySelector('.top-marker');
markerTarget.addEventListener('click', function() {
	/*alert("marker was clicked, dude");*/
	pondClick();
	treeClick();
	mountainClick();
});

