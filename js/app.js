$(document).ready(function () {
	'use strict';

	/* Headroom plugin for smart navBar
	------------------------------------------------------------*/

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

	/* COUNTDOWN TIMER 
	------------------------------------------------------------*/
	$('#countdown').countdown('2019/06/22', function (event) {
		var $this = $(this).html(event.strftime(''
			+'<div><span>%D</span><span>days</span></div>'
			+'<div><span>%H</span><span>hours</span></div>'
			+'<div><span>%M</span><span>min</span></div>'
			+'<div><span>%S</span><span>sec</span></div>'
		))
	});
	
	/* GOOGLE MAP POPUP
	------------------------------------------------------------*/
	$('.popup-gmaps').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	/* FEATURED PEOPLE FILTER AND POPUP 
	------------------------------------------------------------*/
	var portfolioIsotope = $('.pple-container').isotope({
		itemSelector: '.pple-item',
		layoutMode: 'fitRows'
	});

	$('#pple-filters button').on('click', function () {
		$("#pple-filters button").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});
	/* On isotope v2 hidden class is not defined.
	Add hidden class if item hidden, before initialising Isotope: */
	var itemReveal = Isotope.Item.prototype.reveal;
	Isotope.Item.prototype.reveal = function () {
		itemReveal.apply(this, arguments);
		$(this.element).removeClass('isotope-hidden');
	};
	var itemHide = Isotope.Item.prototype.hide;
	Isotope.Item.prototype.hide = function () {
		itemHide.apply(this, arguments);
		$(this.element).addClass('isotope-hidden');
	};

	// Magnific Popup
	$('.pple-container').magnificPopup({
		delegate: '.pple-item:not(.isotope-hidden) a.link-preview', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
			tPrev: "",
			tNext: "",
			tCounter: "%curr% / %total%"
		},
		removalDelay: 100,
		mainClass: "mfp-fade",
		fixedContentPos: false
	});

});