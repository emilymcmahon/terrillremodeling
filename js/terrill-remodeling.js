// Contact form validation
$(function() {
    $("input,textarea").not("[type=submit]").jqBootstrapValidation();
});


// Contact form: when clicking on Full hide fail/success boxes 
$('#name').focus(function() {
    $('#success').html('');
});
