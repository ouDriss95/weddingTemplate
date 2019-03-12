$(document).ready(function () {
	'use strict';

	/* COUNTDOWN TIMER 
	-----------------------------------------------------------------------------------*/
	$('#countdown').countdown('2019/06/22', function (event) {
		var $this = $(this).html(event.strftime(''
			+'<div><span>%D</span><span>days</span></div>'
			+'<div><span>%H</span><span>hours</span></div>'
			+'<div><span>%M</span><span>min</span></div>'
			+'<div><span>%S</span><span>sec</span></div>'
		))
	});
	
	/* Headroom plugin for smart navBar
	-----------------------------------------------------------------------------------*/

	var myElement = document.querySelector("nav");
	// construct an instance of Headroom, passing the element
	var headroom = new Headroom(myElement);
	// initialise
	headroom.init();


	//Sticky Navigation with Background Color
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		if (top >= 100) {
			$("nav").css("background-color", "#313F4C");
		} else {
			$("nav").css("background-color", "transparent");
		}
	});


});