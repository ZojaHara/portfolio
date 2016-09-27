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
 	});

});



	$(".close-cross").on("click", function() {
		$(".about-me").slideUp(1000);
		$("body").removeClass("overflow-y");
	});


	$(".presentation-contact").on("click", function() {
		$("body").removeClass("overflow-y");
		$(".about-me").slideUp(100);
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
	});

	$(".skills-arrow:nth-child(7)").on("click", function() {
		$(".skills-container").removeClass("paused").removeClass("skills-container-animation").addClass("skills-container-animation-2");
	});

})(jQuery);
