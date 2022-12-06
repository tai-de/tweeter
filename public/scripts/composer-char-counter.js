$(document).ready(function() {
  $('#tweet-text').bind('input propertychange', function() {

    inputLength = $(this).val().length;
    remainingChars = 140 - inputLength;

    $(this).parent().siblings().children('output').html(remainingChars);

    if (remainingChars < 0) {
      $(this).parent().siblings().find('output').addClass('invalid');
      $(this).parent().siblings().find('button').attr("disabled", true);
    } else if (remainingChars >= 0) {
      $(this).parent().siblings().find('output').removeClass('invalid');
      $(this).parent().siblings().find('button').attr("disabled", false);
    }

    // if (inputLength > 0) {
    //   $(this).parent().find('label').addClass('minimize');
    // } else {
    //   $(this).parent().find('label').removeClass('minimize');
    // }

  });

  $('textarea').each(function() {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

});