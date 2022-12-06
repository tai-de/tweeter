$(document).ready(function() {

  // Set up write new tweet button to listen for click event

  $('.nav-compose-tweet').click(function() {

    $('section.new-tweet').slideToggle(500);
    $('#tweet-text').focus();

  });

});