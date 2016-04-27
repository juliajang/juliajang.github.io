$(document).ready(function() {

	$(".icon-img").hover(function () {
		$(this).css("opacity", 1.0);
	}, function() {
		$(this).css("opacity", 0.5);
	});

	$('.icon-img').click(function () {
		$('.icon-container').show();
	});

	$(".icon-overlay").click(function () {
		$(".icon-container").hide();
	});

});