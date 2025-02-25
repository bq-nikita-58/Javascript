// User Events
// 1. click
const createButton = document.createElement('button');
createButton.innerText = " click me";
createButton.id = "myButton";
document.body.appendChild(createButton);

const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
alert("Button clicked!");
});



//------------------------------------------------------------------------------------------------------------------------------------------
// mouseover $ mouseout
const div = document.createElement('div');
div.innerText = 'Hover over me';
div.style.padding = '20px';
div.style.backgroundColor = " orange"
div.style.margin = "10px"; 
div.style.border = '1px solid black';
document.body.appendChild(div);

// Add mouseover and mouseout event listeners
div.addEventListener('mouseover', function() {
  div.style.backgroundColor = 'coral';
});

div.addEventListener('mouseout', function() {
  div.style.backgroundColor = 'orange';
});



//---------------------------------------------------------------------------------------------------------------
// form submission event

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.id = 'userInput';
form.appendChild(input);
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Submit';
form.appendChild(submitButton);
document.body.appendChild(form);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  alert(`You entered: ${input.value}`);
});



//---------------------------------------------------------------------------------------------------------------
//4. Key Press Event

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.style.margin = "10px";
document.body.appendChild(inputField);

// Add keypress event listener
inputField.addEventListener('keypress', function(event) {
  console.log(`Key pressed: ${event.key}`);
});



//---------------------------------------------------------------------------------------------------------------

const image = document.createElement('img');
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&s';
document.body.appendChild(image);

// Add load event listener
image.addEventListener('load', function() {
  console.log('Image loaded!');
});
image.addEventListener('error', function() {
   console.log(' Faild to load Image');
})



//---------------------------------------------------------------------------------------------------------------
// 6. Resize Event
window.addEventListener('resize', function() {
   this.document.body.style.backgroundColor = "aqua";
   console.log('Window resized');
 });



 //---------------------------------------------------------------------------------------------------------------
// scroll event
 window.addEventListener('scroll', function() {
   console.log(`Scroll position: ${window.scrollY}`);
 });



 //---------------------------------------------------------------------------------------------------------------
 // change event 
const select = document.createElement('select');
const option1 = document.createElement('option');
option1.value = 'option1';
option1.innerText = 'Option 1';
select.appendChild(option1);
const option2 = document.createElement('option');
option2.value = 'option2';
option2.innerText = 'Option 2';
select.appendChild(option2);
document.body.appendChild(select);

// Add change event listener
select.addEventListener('change', function() {
  alert(`You selected: ${select.value}`);
});


 //---------------------------------------------------------------------------------------------------------------
// online offline

// Function to show a message
function showMessage(msg, isOnline) {
  let msgElement = document.createElement('div');
  msgElement.innerText = msg;
  msgElement.style.backgroundColor = isOnline ? 'green' : 'red';
  msgElement.style.color = 'black';
  msgElement.style.bottom = '10px';
  document.body.appendChild(msgElement);
  // Remove message after 3 seconds
  setTimeout(() => msgElement.remove(), 3000);
}

// Listen for when the user goes online or offline
window.addEventListener('online', () => showMessage('You are online!', true));
window.addEventListener('offline', () => showMessage('You are offline!', false));



 //---------------------------------------------------------------------------------------------------------------
// focus & blur

const divElement = document.createElement('div');
divElement.textContent = 'Click to focus on this div';
divElement.style.width = '200px';
divElement.style.height = '100px';
divElement.style.border = '2px solid black';
divElement.style.display = 'flex';
divElement.style.alignItems = 'center';
divElement.style.justifyContent = 'center';
divElement.style.cursor = 'pointer';

// Make the div focusable by adding a tabindex
divElement.tabIndex = -1;  // This allows the div to receive focus
document.body.appendChild(divElement);

divElement.addEventListener('focus', () => {
    console.log('Div element is focused');
    divElement.style.backgroundColor = 'lightgreen'; // Change background color on focus
});

divElement.addEventListener('blur', () => {
    console.log('Div element lost focus');
    divElement.style.backgroundColor = 'lightcoral'; // Change background color when focus is lost
});

/* 
tabIndex = 0: Makes the element focusable and puts it in the natural tab order (accessible via Tab key).
tabIndex > 0: Makes the element focusable and places it after elements with tabIndex = 0 in the tab order.
tabIndex = -1: Makes the element focusable only programmatically (cannot be tabbe

It's not necessary to use tabIndex with the focus and blur events. The focus and blur events will work on any focusable element by default, such as:
-Input fields (<input>, <textarea>, <select>)
-Buttons (<button>)
-Links (<a> with an href)
-Form elements that can naturally receive focus
However, if you want a non-focusable element (like a div or span) to receive focus and trigger focus/blur events, then you do need to add tabIndex to make it focusable. This is because, by default, div and span cannot receive focus.
 */