// let parent = document.querySelector('#mydiv');
// console.log(parent);
// let child = document.querySelector('#fpara');
// console.log(child);

// parent.removeChild(child);


// Another way of finding parent with the help pf child and then removing it 
let child = document.querySelector('#fpara');
console.log(child);

let parent = child.parentElement;
console.log(parent);

parent.removeChild(child);

