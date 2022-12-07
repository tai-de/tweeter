// Function to create the HTML element for tweets

const createTweetElement = function(tweet) {

  // Breaking down tweet object

  const avatar = tweet.user.avatars;
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const date = timeago.format(tweet["created_at"], 'en_US');

  //Setting up the tooltip for showing exact date when hovering over 'timeago' text

  let dateString = new Date(tweet["created_at"]).toDateString();
  let yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  if (dateString === new Date().toDateString()) {
    dateString = 'Today';
  }
  if (dateString === yesterdayDate.toDateString()) {
    dateString = 'Yesterday';
  }

  const timeString = new Date(tweet["created_at"]).toLocaleTimeString();
  const dateTip = `${dateString}, ${timeString}`;

  // Construct the individual pieces within the tweet article

  const $tweetUserImg = $("<span>")
    .attr("class", "tweet-user-img")
    .html(`<img src="${avatar}"/>`);

  const $tweetUserName = $("<span>")
    .attr("class", "tweet-user-name")
    .html(name);

  const $tweetUserHandle = $("<span>")
    .attr("class", "tweet-user-handle")
    .html(handle);


  const $tweetDate = $("<span>")
    .attr("class", "tweet-date")
    .attr("title", `${dateTip}`)
    .html(date);

  const $tweetButtons = $(`<span class="tweet-buttons">
    <i id="flag" class="fa-regular fa-flag"></i>
    <i id="retweet" class="fa-solid fa-retweet"></i>
    <i id="like" class="fa-regular fa-heart"></i>
    </span>`);

  // Construct the sections of the tweet element

  const $tweetHeader = $("<header>")
    .append($tweetUserImg)
    .append($tweetUserName)
    .append($tweetUserHandle);

  const $tweetContent = $("<section>")
    .attr("class", "tweet-content")
    .text(content);

  const $tweetFooter = $("<footer>")
    .append($tweetDate)
    .append($tweetButtons);

  // Construct the entire tweet element

  const $tweet = $("<article>")
    .attr("class", "tweet")
    .append($tweetHeader)
    .append($tweetContent)
    .append($tweetFooter);

  return $tweet;

};

// Render all tweets on the page

const renderTweets = function(tweetArray) {

  $('#tweets-container').empty();

  for (const tweet of tweetArray) {
    const $tweetArticle = createTweetElement(tweet);
    $('#tweets-container').prepend($tweetArticle);
  }

  // Custom hover effects for like & flag btns

  $('#flag').hover(function() {
    $('#flag').removeClass('fa-regular');
    $('#flag').addClass('fa-solid');
  }, function() {
    $('#flag').addClass('fa-regular');
    $('#flag').removeClass('fa-solid');
  });

  $('#like').hover(function() {
    $('#like').removeClass('fa-regular');
    $('#like').addClass('fa-solid');
  }, function() {
    $('#like').addClass('fa-regular');
    $('#like').removeClass('fa-solid');
  });

};

// Function to send an AJAX GET request to the tweets database,
// then render the response to the page

const loadTweets = function() {

  $.get('tweets').then((tweets) => {
    renderTweets(tweets);
  });

};

$(document).ready(function() {

  // Load tweets on page load

  loadTweets();

  // AJAX handling of form submission

  $("form").submit(function(event) {

    $('#tweet-error').hide();

    event.preventDefault();

    const tweetContent = $('#tweet-text').val().trim();
    const serializedContent = $(this).serialize();

    $('#tweet-text').val(tweetContent);

    // Prevent empty submissions

    if (tweetContent === '') {
      $('#tweet-error').html(`<i class="fa-solid fa-circle-exclamation"></i> You can't tweet nothing!`);
      $('#tweet-error').fadeIn(500);
      return;
    }

    // Prevent too short of a tweet (10 chars)

    if (tweetContent.length < 10) {
      $('#tweet-error').html(`<i class="fa-solid fa-circle-exclamation"></i> Don't be shy, speak your mind!`);
      $('#tweet-error').fadeIn(500);
      return;
    }

    // Prevent too long of a tweet (140 chars)

    if (tweetContent.length > 140) {
      $('#tweet-error').html(`<i class="fa-solid fa-circle-exclamation"></i> You sure have a lot to say!`);
      $('#tweet-error').fadeIn(500);
      return;
    }

    // AJAX post to /tweets and re-render tweets once finished

    $.post("/tweets", serializedContent, () => {
      loadTweets();
    });

    // Reset fields and character count on submit

    $(this).trigger("reset");
    $('#tweet-text').css({ 'height': 'auto' });
    $('#tweet-text').css({ 'height': ($('#tweet-text').scrollHeight) + 'px' });
    $('#tweet-text-label').addClass('restore');
    $('#tweet-text-label').removeClass('minimize');
    $('#tweet-text').focus();
    $('.counter').text('140');

  });

});

