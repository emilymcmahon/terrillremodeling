// Contact form validation
$(function() {
    $("input,textarea").not("[type=submit]").jqBootstrapValidation();
});


// Contact form: when clicking on Full hide fail/success boxes 
$('#name').focus(function() {
    $('#success').html('');
});


$(window).load(function() {
	var minHeight = 100000;
	$(".portfolio-image").each(function(){
		if ($(this).height() < minHeight) {minHeight = $(this).height();}
	});
	$(".portfolio-image").each(function(){
		var oldWidth = $(this).width();
		$(this).height(minHeight);
		$(this).width(oldWidth);
	});
});