$(document).ready(function() {

  // Set up write new tweet button to listen for click event

  $('#nav-compose-tweet').click(function() {

    toggleComposeTweet();

  });

  // Function to toggle compose tweet section as it's reused by 2 controls

  const toggleComposeTweet = function() {

    // if ($('#compose-slide').hasClass('open')) {
    //   $('#compose-slide').addClass('close');
    //   $('#compose-slide').removeClass('open');
    // } else {
    //   $('#compose-slide').addClass('open');
    //   $('#compose-slide').removeClass('close');
    // }

    if ($('section.new-tweet').css('display') !== 'block') {
      $('#compose-slide').css({
        "transform": "scaleY(-1)",
        "transition": "500ms"
      });
    }
    if ($('section.new-tweet').css('display') === 'block')  {
      console.log('close');
      $('#compose-slide').css({
        "transform": "scaleY(+1)",
        "transition": "500ms"
      });
    }

    $('section.new-tweet').slideToggle(500);

    $('#tweet-text').focus();

  };

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
      toggleComposeTweet();
    }

    return false;

  });

});