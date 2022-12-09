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
      } else {
        $('html, body').animate({ scrollTop: 0 }, 360);
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
      $('nav').addClass('mobile-collapse');
    } else if ($(window).width() < 1024 && scrollPosition < 100 && !mobileScrollCheck) {
      $('nav').removeClass('mobile-collapse');
    }

  });

  // Clicking the 'go to top' button scrolls user

  $('#toTopButton').click(function() {

    if ($('section.new-tweet').css('display') === 'block') {
      $('html, body').animate({ scrollTop: 0 }, 360);
    }

    if ($('section.new-tweet').css('display') !== 'block') {
      toggleComposeTweet();
    }

    return false;

  });

  // Clicking logo/app name scrolls to top and swaps theme

  $('.logo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 360);

    const el1 = document.getElementById("theme1");
    const el2 = document.getElementById("theme2");

    if (el1.disabled) {
      el2.disabled = "disabled";
      el1.disabled = '';
      return;
    }
    if (!el1.disabled) {
      el2.disabled = '';
      el1.disabled = "disabled";
      return;
    }

  });

  // Fix nav bar on resize from desktop to mobile

  $(window).resize(function() {

    if ($(window).width() < 1024 && $('nav').hasClass('compact') && !$('nav').hasClass('mobile-collapse')) {
      $('nav').addClass('mobile-collapse');
    }
    if ($(window).width() > 1024 && $('nav').hasClass('mobile-collapse')) {
      $('nav').removeClass('mobile-collapse');
    }

  });

});