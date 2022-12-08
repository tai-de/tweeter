# Tweeter Project

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5, and CSS. This project, part of the LHL web bootcamp, was done to get more comfortable with front-end skills.

## Features

My Tweeter project includes the LHL stretch features as well as added functionalities.

- Navigation
  - Nav bar collapses based on scroll position
  - Arrows icon in nav bar flip based on whether the Compose Tweet section is displayed
  - Write a new tweet button disappears on scroll down
- Compose Tweet
  - Fancy Tweet (submit) button using hover effects
  - Label for the textarea is displayed 'inside' the textarea and slides out of the way on input
  - Textarea is validated on input to prevent carriage returns, leading spaces, and double spaces
- Tweet List
  - Hovering over the 'time ago' will display the actual date and time of the tweet
    - If the tweet was posted today or yesterday, it will display 'Today' or 'Yesterday' respectively in place of the full date string
- Mobile Experience
  - Nav bar background is invisible until reaching a specific scroll point
  - Sizing is adjusted to provide better view on a mobile device (tested on iPhone 13)

## Bugs

- Issue with nav bar visibility when resizing the window from mobile (width < 1024) to desktop if the scroll position has passed a certain point, as the mobile nav bar is transparent by default.

## Final Product

*Click on screenshots to see mobile variant*

[!["Screenshot of Tweeter"](/docs/home.png)](/docs/home_mobile.png)

[!["Screenshot of compose box opened](/docs/compose.png)](/docs/compose_mobile.png)

[!["Screenshot of invalid tweet](/docs/invalid.png)](/docs/invalid_mobile.png)

[!["Screenshot of tweets/scrolled down"](/docs/tweets.png)](/docs/tweets_mobile.png)

## Dependencies

- Express
- Node 5.10.x or above
- Body-Parser
- Chance
- MD5

## Getting Started

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or download this repository onto your local machine.

2. Install dependencies using the `npm install` command.

3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.

4. Go to <http://localhost:8080/> in your browser.
    - Three initial tweets are loaded from `/server/data-files/initial-tweets.json`