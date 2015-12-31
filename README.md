# Website Optimization Project
## Description
This project was produced for the course _Website Optimization_ offered by [Udacity](http://udacity.com). All files for the project were supplied by Udacity. The task was to optimize the site's code for page-load speed and smooth scrolling.
## Installation
- Clone the repository: [https://github.com/dkmullen/frontend-nanodegree-mobile-portfolio](https://github.com/dkmullen/frontend-nanodegree-mobile-portfolio)
- Find the human-readable files in the `src` dir and the minified files in `dist`.
- If you like, you can also use the included files called `Gruntfile.js` and `package.json` to configure Grunt on your computer and use it for automating the task of updating the files in `dist` as you make changes in `src`. I found these links to be helpful in getting Grunt running:
  - [GruntJS.com](gruntjs.com) - The Grunt page itself
  - [This tutorial](https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt) - A Simple Guide to Getting Started With Grunt

## Running the Project
- Double-click `src/index.html` to run the portfolio page that I optimized for a high PageSpeed Insights score, or run it online [here](http://dkmullen.com/mobile-port/index.html).
- Double-click `src/views/pizza.html` to run the pizzeria page I modified to speed up the pizza scrolling and pizza resize functions, or run it online [here](http://dkmullen.com/mobile-port/views/pizza.html).

## Major Changes to the Pizzeria Page
The main tasks of the project were to get the pizzas to resize in **less than 5ms** when the slider is clicked, and to get the sliding pizzas to scroll at **60 frames-per-second**. The `src/views/js/main.js` file was modified to achieve this.

**Pizza Resize:**
- Eliminated an unneeded function (`determineDX`) and simplified the loop in the function `changePizzaSizes` to remove unneeded steps.
- Changed `querySelectorAll` to the more efficient `getElementsByClassName` in `changePizzaSizes`.

Pizzas now resize in as little as 0.4ms.

**Sliding Pizzas:**
- Moved the scrolling calculation out of the for-loop in `updatePositions()` and assigned it to the variable `scrollCache`. This change seems to have provided most of the benefit.
- Changed `querySelectorAll` to `getElementsByClassName` in `updatePositions`.
- Put the calculations for moving the pizza into a separate loop and store them in an array (`phaseCalc`) to avoid forced synchronous layout.
- Reduced the number of pizzas from 200 to 35 which isn't discernable on a max-width wide screen. Could make this responsive and reduce the number on smaller screens.

Average time to generate the frames when scrolling ranges between 0.18ms and 0.45ms.

### Original repository:
https://github.com/udacity/frontend-nanodegree-mobile-portfolio