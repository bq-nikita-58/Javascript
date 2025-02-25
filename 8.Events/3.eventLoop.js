// Before running this file connect it an an index. html file


// function printMyName(){
//     console.log("nikita rani")
// }

// console.log("Startr");
// console.log("hii");
// setTimeout(printMyName, 5000);
// console.log("end");

let button = document.getElementById('button');
button.addEventListener('click', function onClick(){
    console.log('you clicked the button');
});

console.log("hii");

setTimeout ( function setTimeout(){
    console.log("click the button !");
}, 5000);

console.log("welcome to loop");