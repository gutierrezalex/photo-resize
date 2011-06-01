function imgresize()
{
	var contentHeight = $(window).height();

	$('img').attr('height', contentHeight - 35);
}

$(document).ready(function() {
	
	if (document.getElementById("photo"))
	{
		imgresize();
	
		$(window).bind('resize', function() {
			imgresize();
		});
	}
});