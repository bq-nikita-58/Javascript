// .style
let element = document.getElementById('spara');
console.log(element);

console.log(element.style);

element.style.backgroundColor = "grey";
element.style.color = "white";

// .style property can only can one property at a time in inline css



//------------------------------------------------------------------------------------------------------------------
//.cssText
// through this we can get and set multiple css property at once

let secElement = document.getElementById('sdiv');
console.log(secElement);

console.log(secElement.style.cssText);

secElement.style.cssText = "background-color: black; color:white; padding: 1.5rem;";  // it will overwrite all the existing property 
console.log(secElement.style.cssText);



//------------------------------------------------------------------------------------------------------------------
//.setAttribute
// this will add id , class, style , etc to the element and if there are previously defined then it will be overwritten

let firstElement = document.querySelector('#fdiv');
console.log(firstElement);

firstElement.setAttribute('class', 'divclass');
console.log(firstElement);

// firstElement.setAttribute('class', 'seconddivclass');  // update thye class name

firstElement.setAttribute('style',"padding:0.1rem");   // overwrite all the style of that element



//------------------------------------------------------------------------------------------------------------------
// .className
// get and set class namre

// console.log(fpara.className);
let para = document.getElementById('fpara');
console.log(para.className);
para.className = "text1 text2 text3";
console.log(para.className);
console.log(para)



//------------------------------------------------------------------------------------------------------------------
//.classList

console.log(para.classList);

para.classList.add("text4");
console.log(para.classList);

para.classList.remove("text3");
console.log(para.classList);

para.classList.toggle("text2");     // in toggle if class is present then it will remove it and if not then add it 
console.log(para.classList);

console.log(para.classList.contains("text4"));
