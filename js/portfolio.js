// Fire off Boostrap Scrollspy
$(function() {
	$('body').scrollspy({ target: '#navigation' });
});

// Fire off Boostrap Affix
$(function() {
	$('#nav').affix({
	  offset: {
	    top: 150
	  }
	});
});

// Add & remove Small Logo from Bootstrap Navbar once Affix is fired off
$(function() {
	// Resources: Boostrap Affix documentation and W3C jQuery documentation (http://www.w3schools.com/jquery/jquery_dom_remove.asp)
	$('#nav').on('affixed.bs.affix', function() {
		$('.navbar-brand').append('<img alt="Site Logo" src="images/logo1.gif" class="logo-sm">');
	});
	$('#nav').on('affixed.bs.affix', function() {
		$('.navbar-brand').after('<span class="navbar-brand-title">Michael Solano-Mullings</span>');
	});
	$('#nav').on('affix-top.bs.affix', function() {
		$('.logo-sm').remove();
		$('.navbar-brand-title').remove();
	});
});

// Fire off Bootstrap Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Get current year
$(function() {
	// Resource: W3C Date object (http://www.w3schools.com/jsref/jsref_obj_date.asp)
	var d = new Date();
	var currentYear = d.getFullYear();
	$('.current-year').append(currentYear);
});