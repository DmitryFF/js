$(document).ready(function(){
var myCanvas = $('#mainFig');
stepStart = 8;
var requestAnimationFrame = window.requestAnimationFrame || 
									window.mozRequestAnimationFrame || 
									window.webkitRequestAnimationFrame || 
									window.msRequestAnimationFrame;
function invert(step) {
	var stepNum = step;
	var i = 0;
  $('#mainFig').setPixels({
  	fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 666,
    each: function(px) {
    	
      px.r = px.r-12;
      px.g = px.g-12;
      px.b = px.b-12;
      

    }
  });
}
function actColor() {

	invert(stepStart);
		stepStart--;
		if (stepStart > 0) {
    		requestAnimationFrame(actColor);
  		}
	}
myCanvas.drawImage({
  source: '358.jpg',
  fromCenter: false,
  x: 0, y: 0,
  width: 1000,
  height: 666
});
$('.mainTumb').one('click',  function(e) {
	e.preventDefault();
	requestAnimationFrame(actColor);
	$('.mainHidden').toggleClass('mainVisible');
});

});