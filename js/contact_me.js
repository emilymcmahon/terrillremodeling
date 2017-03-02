$(function() {
    $("input,textarea").not("[type=submit]").jqBootstrapValidation();
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
