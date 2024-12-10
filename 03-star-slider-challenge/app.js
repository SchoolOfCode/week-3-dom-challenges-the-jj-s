/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

//Get ID for each star
//ID for stars is the div container called 'stars'
//star-icon is the symbol
const starSlider = document.getElementById("starSlider");

const starsContainer = document.getElementById("stars");

function updateStars() {
  const starCount = starSlider.value;

  starsContainer.innerHTML = "";

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");

    star.textContent = "★";

    star.classList.add("star-icon");

    starsContainer.appendChild(star);
    console.log(star);
  }
}

starSlider.addEventListener("input", updateStars);

updateStars();

// const starsIcon = starsContainer.firstElementChild;

// Get starSlider by input element

// starSlider.addEventListener("input", updateStars);
// function updateStars() {
//   const starCount = starSlider.value;
//   console.log(starCount);

//   for (let i = 0; i < starCount; i++) {
//     // document.createElement(starsIcon).appendChild();
//     starsContainer.appendChild(starsIcon);
//   }
// }
// updateStars();

//star slider has an input of 1 (1-5) and we want to change it to match our inputs.
//We need a function that gets the value and changes it to the value from the event listener
//and add the element to the DOM

// const starSlider = document.getElementById("starSlider");

// const starsContainer = document.getElementById("stars");

// const starsIcon = starsContainer.firstElementChild;

// console.log(starsIcon);
// // Get starSlider by input element

// function updateStars() {
//   const starCount = starSlider.value;

//   // starsContainer.innerHTML = "";

//   // for (let i = 0; i < starCount; i++) {
//   const star = document.createElement("span");

//   starsContainer.appendElemenChild(starsIcon);

//   console.log(starsIcon);
// }
// // }

// starSlider.addEventListener("input", updateStars);

// updateStars();
