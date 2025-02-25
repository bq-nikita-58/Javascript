// // // normal way to add event 
// var buttonElement = document.querySelector('button');

// buttonElement.onclick = function() {
//    alert('You clicked the button!');
// }

// // through event listtner

// var buttonElement = document.querySelector('button');

// function handler1() { alert("hii") }
// function handler2() { alert("this is nikita")}

// buttonElement.onclick = function() {
//    handler1();
//    handler2();
// }


// // -------------------------------------------------------------------------------------------------------------------------------------------------------
// // problem with on click 

// var buttonElement = document.querySelector('button');

// buttonElement.onclick = function() {
//    alert('Your handler: Button clicked!');
// };

// // Another developer adds their handler, but it overwrites yours.
// buttonElement.onclick = function() {
//    alert('Another handler: Button clicked!');
// };

// // onclick can only handle one function at a time.


// // -------------------------------------------------------------------------------------------------------------------------------------------------------
// // problem solved with addEventListener()

var buttonElement = document.querySelector('button');

// Your event listener
buttonElement.addEventListener('click', function() {
   alert('Your handler: Button clicked!');
});

// Another developer adds their event listener
buttonElement.addEventListener('click', function() {
   alert('Another handler: Button clicked!');
});

// Now **both handlers** will run when the button is clicked, and nothing gets overwritten.