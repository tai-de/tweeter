$(document).ready(function() {

  // Set up write new tweet button to listen for click event

  $('#nav-compose-tweet').click(function() {

    toggleComposeTweet();

  });

  // Function to toggle compose tweet section as it's reused by 2 controls

  const toggleComposeTweet = function() {

    if ($('section.new-tweet').css('display') !== 'block') {
      $('#compose-slide').css({
        "transform": "scaleY(-1)",
        "transition": "500ms"
      });

      /* Prevent scroll down to compose section on desktop screen */
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
    console.log(scrollPosition);

    if (scrollPosition > 400) {
      $('#toTopButton').css('display', 'flex');
      $('nav').addClass('compact');
    } else {
      $('#toTopButton').css('display', 'none');
      $('nav').removeClass('compact');
    }

    if ($(window).width() < 1024 && scrollPosition >= 100) {
      $('nav').css({
        "background": "rgb(var(--clr-accent))",
        "background-image": "url('../images/header-texture.png')",
        "background-position": "0 -100px",
        "box-shadow": "0 0px 5px 5px rgb(var(--clr-dark), 0.25)",
        // "transition": "250ms"
      });
    } else if ($(window).width() < 1024 && scrollPosition < 100) {
      $('nav').css({
        "background": "none",
        "box-shadow": "none"
      });
    }

    if ($(window).width() < 1024 && scrollPosition > 100) {
      // $('nav').addClass('compact');
    } else if ($(window).width() < 1024 && scrollPosition < 100) {
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

  $('.logo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 360);
  });

});