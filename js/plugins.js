(function($, window, document, undefined) {

// event items with data-param attribute except the item which display all elements
// elements to shuffle with class "projects-item" and another one called exactly like data-param attribute
// fadeOut section has to be set by the user

$.fn.shuffleItems = function(userOptions) {

	var defaults = {
		animDuration:500,
		className:"myClass"
	};

	var options = $.extend({}, $.fn.shuffleItems.defaults, userOptions);

return this.each(function() {

	var that = $(this),
			li = that.find("li"),
			projectsItem = $(".projects-item");

		li.on("click", function() {
			var item = $(this),
					dataClass = item.attr("data-param");

					if(dataClass) {
						projectsItem.css("display", "none").filter($("."+dataClass).css("display", "block"));
					} else {
						projectsItem.css("display", "block");
					}

			$("."+$.fn.shuffleItems.defaults.className).fadeOut($.fn.shuffleItems.defaults.animDuration);
		});
});

};

$.fn.shuffleItems.defaults = {
	animDuration:1000,
	className:"tip-section"
};
$(".sublist-options").shuffleItems();

})(jQuery, window, document);
