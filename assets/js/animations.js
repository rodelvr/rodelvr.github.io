/* Multiple text animation */

$(function(){
    
    /*-------------------------------------------------------------------*/
    /*  Home Text Rotator. Requires jQuery morphext plugin.
    /*-------------------------------------------------------------------*/
    $("#js-fading").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple , Very Doge , Much Wow , Such Cool).
        separator: "|",
        
        // The delay between the changing of each phrase in milliseconds.
        speed: 2500
    });
});

/* Scrolling animation skill bars */

	var skillsDiv = jQuery('#skillbars');

	jQuery(window).on('scroll', function() {
	  var winT = jQuery(window).scrollTop(),
		winH = jQuery(window).height(),
		skillsT = skillsDiv.offset().top;
	  if (winT + winH > skillsT) {
		jQuery('.skillbar').each(function() {
		  jQuery(this).find('.skillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		  }, 4000);
		});
	  }
	});

/* Scrolling animation pie charts */

   $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.chart').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

        $('.chart').easyPieChart({
          size: 80,
          lineWidth: 6,
          lineCap: "square",
          barColor: "#FB7D24",
          trackColor: "#ffffff",
          scaleColor: !1,
          easing: 'easeOutBounce',
          animate: 5000,
          onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
          }
        });

        }

    }); 

});

/* Scrolling animation time line */

	(function() {

	  'use strict';

	  // define variables
	  var items = document.querySelectorAll(".timeline li");

	  // check if an element is in viewport
	  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	  function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
		  rect.top >= 0 &&
		  rect.left >= 0 &&
		  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	  }

	  function callbackFunc() {
		for (var i = 0; i < items.length; i++) {
		  if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		  }
		}
	  }

	  // listen for events
	  window.addEventListener("load", callbackFunc);
	  window.addEventListener("resize", callbackFunc);
	  window.addEventListener("scroll", callbackFunc);

	})();
