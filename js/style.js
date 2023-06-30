(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    return false;
	})
  $('.has-children').on ('click', function() {
		   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('open');
	});
  $('.has-children').on ('click', function() {
		   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('close');
	});
})();