$(document).ready(function() {

  // Set up textarea to listen for any changes & update character counter

  $('#tweet-text').bind('input propertychange', function() {

    const inputLength = $(this).val().trim().length;
    const remainingChars = 140 - inputLength;

    $(this).parent().siblings().find('output').text(remainingChars);

    if (remainingChars < 0) {
      $(this).parent().siblings().find('output').addClass('invalid');
    } else if (remainingChars >= 0) {
      $(this).parent().siblings().find('output').removeClass('invalid');
    }

    if (inputLength > 0) {
      $(this).siblings('label').addClass('minimize');
      $(this).siblings('label').removeClass('restore');
      // });
    }
    if (inputLength === 0) {
      $(this).siblings('label').addClass('restore');
      $(this).siblings('label').removeClass('minimize');
    }

  });

  // Update textarea based on input
  // Remove 'invalid' characters and resize

  $('textarea').on('input', function() {
    $(this).val( $(this).val().replace(/\r?\n/gi, ' ' ) ); // delete carriage return (replace with space)
    $(this).val( $(this).val().replace(/^\s/gi, '' ) ); // delete leading spaces in input
    $(this).val( $(this).val().replace(/\s{2}/gi, ' ' ) ); // replace double spaces with single
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

});