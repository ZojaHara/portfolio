;(function($) {

	$(document).ready(function() {

 		$('.jsScroll').on('click', function(event) {

 		var target = $( $(this).attr('href') );

 			if( target.length ) {
 				event.preventDefault();
 				$('html, body').animate({
 				scrollTop: target.offset().top
 			}, 700);
 		}
		$(".popup_menu").slideUp(300);
 	});

});



	$(".close-cross, .presentation-contact").on("click", function() {
		$(".about-me").slideUp(1000);
		$(".popup_menu").slideUp(700);
	});


	$(".hamburger").on("click", function() {
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
		$(".skills-container").removeClass("paused").removeClass("skills-container-animation-2").addClass("skills-container-animation");
		//IE bug fix
		$(".skills-details").each(function() {
			$(this).removeClass("paused").removeClass("skills-container-animation-2").addClass("skills-container-animation");
		});
	});

	$(".skills-arrow:nth-child(7)").on("click", function() {
		$(".skills-container").removeClass("paused").removeClass("skills-container-animation").addClass("skills-container-animation-2");
		//IE bug fix
		$(".skills-details").each(function() {
			$(this).removeClass("paused").removeClass("skills-container-animation").addClass("skills-container-animation-2");
		});
	});

})(jQuery);
