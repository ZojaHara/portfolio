;(function($) {

// 	$(document).ready(function() {
//
//  		$('.jsScroll').on('click', function(event) {
//
//  		var target = $( $(this).attr('href') );
//
//  			if( target.length ) {
//  				event.preventDefault();
//  				$('html, body').animate({
//  				scrollTop: target.offset().top
//  			}, 700);
//  		}
// 		$(".popup_menu").slideUp(300);
//  	});
//
// });
//Loader animation
	$('.loader').delay(1900).fadeOut(1500).css({'overflow':'visible'});
	$(".loader-view").on("click", function() {
		$(".main-page-loader").css("display", "flex").delay(1800).fadeOut(700).css({'overflow':'visible'});
	});

	$(".close-cross, .presentation-contact, .arrow-popup").on("click", function() {
		$(".about-me").slideUp(400);
		$(".popup_menu").slideUp(700);
	});


	$(".hamburger-container").on("click", function() {
		$(".popup_menu").slideDown(1000);
	});

	//Cricles animation

	$(".skills-container").on("click", function() {
		$(this).toggleClass("paused").addClass("skills-container-animation");
		//IE bug fix
		$(".skills-details").each(function() {
			$(this).toggleClass("paused").addClass("skills-container-animation");
		});

	});

	$(".skills-arrow:nth-child(6)").on("click", function() {
		$(".skills-container").removeClass("paused skills-container-animation-2").addClass("skills-container-animation");
		//IE bug fix
		$(".skills-details").each(function() {
			$(this).removeClass("paused skills-container-animation-2").addClass("skills-container-animation");
		});
	});

	$(".skills-arrow:nth-child(7)").on("click", function() {
		$(".skills-container").removeClass("paused skills-container-animation").addClass("skills-container-animation-2");
		//IE bug fix
		$(".skills-details").each(function() {
			$(this).removeClass("paused skills-container-animation").addClass("skills-container-animation-2");
		});
	});

})(jQuery);
