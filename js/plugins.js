
(function($) {

	$(document).ready(function(){
  		$('.bxslider').bxSlider({
  			auto:true,
  			speed:1000,
  			adaptiveHeight:true,
  			controls:false,
  			autoHover:true
  		});

});

   //Loader animation
	$('#loader').delay(2200).fadeOut(1500).css({'overflow':'visible'});


})(jQuery);
