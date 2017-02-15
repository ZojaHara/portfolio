;(function($) {

//Loader animation
	$('.loader').delay(1900).fadeOut(1500).css({'overflow':'visible'});
	$(".loader-view").on("click", function() {
		$(".main-page-loader").css("display", "flex").delay(1800).fadeOut(700).css({'overflow':'visible'});
	});

	$(".close-cross, .presentation-contact, .menu-list").on("click", function() {
		$(".intro").slideUp(400);
		$(".slide_menu").fadeOut(500);
	});

	$(".menu-list-home").on("click", function() {
		$(".intro").slideDown(400);
	});


	$(".hamburger-container").on("click", function() {
		$(".slide_menu").slideDown(700).css("display","flex");
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
