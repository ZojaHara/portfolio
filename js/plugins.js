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


// Vanilla JS ES6 CODE

// (function(){
// 	class ShuffleItems {
//
// 		constructor(chooseElem, listItem, attrs, section) {
// 			this.chooseElem = document.querySelectorAll(chooseElem);
// 			this.listItem = document.querySelectorAll(listItem);
// 			this.attrs = attrs;
// 			this.attrFunction(attrs);
// 			this.section = document.querySelector(section);
// 		}
//
// 	attrFunction(attrs){
// 		for(let elem of this.chooseElem){
// 			elem.getAttribute(attrs);
// 		}
// 	}
//
// 	fadeOut() {
// 		this.section.style.transition = "opacity 1.5s";
// 		this.section.style.opacity = 0;
//
// 		setTimeout(()=>this.section.style.display="none", 1500);
// 		setTimeout(()=>this.section.style.opacity="1", 1700);
// 	}
//
//
// 	eventFunction() {
// 		for(let elem of this.chooseElem) {
// 			elem.addEventListener("click", (e)=> {
// 				let attrName = e.target.getAttribute(this.attrs);
//
// 				for(let item of this.listItem){
// 					item.style.display = "block";
// 				}
//
// 				if(attrName!==null) {
// 					for(let item of this.listItem) {
// 						let bValue = item.classList.contains(attrName);
// 						item.style.display = "block";
// 						if(!bValue) {
// 							item.style.display="none";
// 						}
// 						console.log(item.classList.contains(attrName));
// 					}
// 				}
//
// 				this.fadeOut();
//
// 			},false);
// 		}
// 	}
//
// }
//
// 	var a = new ShuffleItems(".choose-elem", ".projects-item", "data-param", ".tip-section");
// 	a.eventFunction();
// })();
