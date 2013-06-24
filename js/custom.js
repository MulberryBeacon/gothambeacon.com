/**
 * Dynamically detects which main category page is selected in the navigation bar 
 */
$(document).ready(function() {
	var pathname = window.location.pathname;
	$("div.navbar-inner a").each(function(index) {
		if ((index == 0 && pathname == "/") || pathname.toUpperCase().indexOf($(this).text().toUpperCase()) != -1) {
			$(this).parent().addClass("active");
			return false;
		}
	});
});