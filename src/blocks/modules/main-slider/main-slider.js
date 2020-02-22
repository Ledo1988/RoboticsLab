import $ from "jquery";
import Swiper from "swiper";

$(document).ready(function() {
	var swiper = new Swiper('.main-slider', {
		navigation: {
			nextEl: '.main-slider__button-next',
			prevEl: '.main-slider__button-prev',
		},
	});

});
