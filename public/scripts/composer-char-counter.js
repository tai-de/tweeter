$(document).ready(function() {

  // Set up textarea to listen for any changes & update character counter

  $('#tweet-text').bind('input propertychange', function() {

    inputLength = $(this).val().length;
    remainingChars = 140 - inputLength;

    $(this).parent().siblings().children('output').html(remainingChars);

    if (remainingChars < 0) {
      $(this).parent().siblings().find('output').addClass('invalid');
    } else if (remainingChars >= 0) {
      $(this).parent().siblings().find('output').removeClass('invalid');
    }

    // if (inputLength > 0) {
    //   $(this).parent().find('label').addClass('minimize');
    // } else {
    //   $(this).parent().find('label').removeClass('minimize');
    // }

  });

  // Scale textarea based on input

  $('textarea').each(function() {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

});