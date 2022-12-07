$(document).ready(function() {

  // Compose Tweet section toggled when 'Write a new tweet' clicked

  $('#nav-compose-tweet').click(function() {

    toggleComposeTweet();

  });

  // Function to toggle compose tweet section

  const toggleComposeTweet = function() {

    if ($('section.new-tweet').css('display') !== 'block') {

      $('#compose-slide').css({
        "transform": "scaleY(-1)",
        "transition": "500ms"
      });

      // Prevent scroll down/'focus' to compose section on desktop screen
      
      if ($(window).width() < 1024) {
        $('html, body').animate({ scrollTop: 400 }, 360);
      }

    }

    if ($('section.new-tweet').css('display') === 'block') {
      $('#compose-slide').css({
        "transform": "scaleY(+1)",
        "transition": "500ms"
      });
      $('html, body').animate({ scrollTop: 0 }, 360);
    }

    $('section.new-tweet').slideToggle(500);

    $('#tweet-text').focus();

  };

  // When the user scrolls down 20px from the top of the document,
  // show the scroll to top button and collapse nav

  $('#toTopButton').css('display', 'none');

  $(this).scroll(function() {

    const scrollPosition = $(window).scrollTop();

    const mobileScrollCheck = $('nav').css('background-image') === 'none' ? true : false;

    if (scrollPosition > 400) {
      $('#toTopButton').css('display', 'flex');
      $('nav').addClass('compact');
    } else {
      $('#toTopButton').css('display', 'none');
      $('nav').removeClass('compact');
    }

    if ($(window).width() < 1024 && scrollPosition >= 100 && mobileScrollCheck) {
      $('nav').css({
        "background": "rgb(138, 155, 208, 1)",
        "background-image": "url('../images/header-texture-3.png')",
        "background-position": "0 -100px",
        "box-shadow": "0 0px 5px 5px rgb(53, 53, 49, 0.25)",
        "transition": "250ms"
      });
    } else if ($(window).width() < 1024 && scrollPosition < 100 && !mobileScrollCheck) {
      $('nav').css({
        "background": "none",
        "backgorund-image": "none",
        "box-shadow": "none",
        "transition": "0ms"
      });
    }

  });

  // Clicking the 'go to top' button scrolls user

  $('#toTopButton').click(function() {

    $('html, body').animate({ scrollTop: 0 }, 360);

    if ($('section.new-tweet').css('display') !== 'block') {
      toggleComposeTweet();
    }

    return false;

  });

  // Clicking logo/app name scrolls to top

  $('.logo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 360);
  });

});