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

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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

const renderTweets = function(tweetArray) {
  
  for (const tweet of tweetArray) {
    const $tweetArticle = createTweetElement(tweet)
    $('#tweets-container').append($tweetArticle);
  }
  
};

$(document).ready(function() {
renderTweets(data);
})