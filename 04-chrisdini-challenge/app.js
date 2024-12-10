/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!


// get the element for image
const chrisImage = document.getElementById("chrisImage");

// function to change opacity
const changeOpacity = (e, value) => {
  e.target.style.opacity = value;
};

// add event listener for hover - change opacity to 0 to hide image
chrisImage.addEventListener("mouseover", (e) => changeOpacity(e, "0"));

// add event listener for no hover - change opacity to 1 to show image
chrisImage.addEventListener("mouseout", (e) => changeOpacity(e, "1"));


