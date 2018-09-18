$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  var formData = $(this).serialize();

  $.post( "/sign-up", formData);
});
