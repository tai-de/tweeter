/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Function to create the HTML for tweets

const createTweetElement = function(tweet) {

  const avatar = tweet.user.avatars;
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const date = timeago.format(tweet["created_at"], 'en_US');

  // Build the individual items within the tweet article

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
    .html(date);

  const $tweetButtons = $(`<span class="tweet-buttons">
    <i class="fa-regular fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-regular fa-heart"></i>
    </span>`);

  // Building the sections of the tweet article element

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

  // Construct the entire tweet article element

  const $tweet = $("<article>")
    .attr("class", "tweet")
    .append($tweetHeader)
    .append($tweetContent)
    .append($tweetFooter);

  return $tweet;

};

// Display tweets on the page, also used when posting new tweets

const renderTweets = function(tweetArray) {

  for (const tweet of tweetArray) {
    const $tweetArticle = createTweetElement(tweet);
    $('#tweets-container').prepend($tweetArticle);
  }

};

//Function to load tweets from database, then rendered to the page

const loadTweets = function() {

  $.ajax('/tweets', { method: 'GET' })
    .then(function(tweets) {
      renderTweets(tweets);
    });

};

$(document).ready(function() {

  // Load tweets on page load

  loadTweets();

  // Ajax handling of form submission

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
    };

    // Prevent too short of a tweet

    if (tweetContent.length < 10) {
      $('#tweet-error').html(`<i class="fa-solid fa-circle-exclamation"></i> Don't be shy, speak your mind!`);
      $('#tweet-error').fadeIn(500);
      return;
    };
    // Prevent too long of a tweet

    if (tweetContent.length > 140) {
      $('#tweet-error').html(`<i class="fa-solid fa-circle-exclamation"></i> You sure have a lot to say!`);
      $('#tweet-error').fadeIn(500);
      return;
    };

    // Ajax post to /tweets, once completed, create tweet element and add to page

    $.post("/tweets", serializedContent, (tweetObj) => {
      renderTweets([tweetObj]);
      // const tweetElement = createTweetElement(tweetObj);
      // $('#tweets-container').prepend(tweetElement);
    });

    // Reset input field and character count on submit

    $(this).trigger("reset");
    $('#tweet-text').css({ 'height': 'auto' });
    $('#tweet-text').css({ 'height': ($('#tweet-text').scrollHeight) + 'px' });
    $('#tweet-text-label').addClass('restore');
    $('#tweet-text-label').removeClass('minimize');
    $('#tweet-text').focus();
    $('.counter').html('140');
    $('#tweet-error').fadeOut(250);

  });

});


