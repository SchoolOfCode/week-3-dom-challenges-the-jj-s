/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

//lightBulbon

const onButton = document.getElementById("turnBulbOn");
const offButton = document.getElementById("turnBulbOff")
const img = document.getElementById("lightbulb");
//function call back for eventlis
function bulbOn(){ 
  lightbulb.src = "light-bulb-on.png"
};

//add event listener to listen to the click  
onButton.addEventListener("click", bulbOn ); 
//when the button is clicked 
//change the img "light-bulb-on.png" 
function bulbOff(){
  lightbulb.src = "light-bulb-off.png"

};
offButton.addEventListener("click", bulbOff )

//lightBuloff
//get the turneff button.
//get the img
//add event listener to listen to the click 
//when the button is clicked 
//change the img "light-bulb-off.png"
