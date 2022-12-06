$(document).ready(function() {

  // Set up write new tweet button to listen for click event

  $('#nav-compose-tweet').click(function() {

    $('section.new-tweet').slideToggle(500);
    $('#tweet-text').focus();

  });


  // When the user scrolls down 20px from the top of the document,
  // show the scroll to top button and collapse nav

  $('#toTopButton').css('display', 'none');

  $(this).scroll(function() {
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition > 400) {
      $('#toTopButton').css('display', 'flex');
      $('nav').addClass('compact');
    } else {
      $('#toTopButton').css('display', 'none');
      $('nav').removeClass('compact');
    }
  });

  // Set up go to top button to listen for click event

  $('#toTopButton').click(function() {

    $('html, body').animate({ scrollTop: 0 }, 360);

    if ($('section.new-tweet').css('display') !== 'block') {
      $('section.new-tweet').slideToggle(500);
    }
    $('#tweet-text').focus();

    return false;

  });

});