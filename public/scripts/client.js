/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(document).ready(function() {

//   $.ajax('client.js', { method: 'GET' })
//     .then(function(tweetsHtml) {
//       console.log('Success: ', tweetsHtml);
//       // $button.replaceWith(morePostsHtml);
//     });

// });

const createTweetElement = function(tweet) {

  const avatar = tweet.user.avatars;
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const date = tweet["created_at"];


  const $tweet = $(`<article class="tweet">
  <header>
    <span class="tweet-user-img"><img src="${avatar}"></span>
    <span class="tweet-user-name">${name}</span>
    <span class="tweet-user-handle">${handle}</span>
  </header>
  <section class="tweet-content">${content}</section>
  <footer>
    <span class="tweet-date">${date}</span>
    <span class="tweet-buttons">
      <i class="fa-regular fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-regular fa-heart"></i>
    </span>
  </footer>
</article>`);

  return $tweet;

};