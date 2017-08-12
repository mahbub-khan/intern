$(document).ready(function() {
 
  $(".four-slide-carousel").owlCarousel({
 
      autoPlay: 3700, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,2],
	  itemsTablet :	[768,2],
	  itemsMobile :	[479,1]
 
  });
 
})