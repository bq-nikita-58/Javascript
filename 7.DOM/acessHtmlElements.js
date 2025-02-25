// to get element by specific id
document.getElementById("fpara");
document.getElementById("fheading");

// to get element by Specific class name
document.getElementsByClassName("textMatter");
console.log(document.getElementsByClassName("textMatter"));

// to get element by tag name
document.getElementsByTagName("p");


//-----------------------------------------------------------------------------------------------------------
//Query selector
// id -> #IdName, class -> .ClassName
//if there are multiple elemets but query selector will only display 1st element and ignores the rest

document.querySelector('#spara');
document.querySelector(".textMatter"); 
document.querySelector("p");  // It will only display the 1st paragraph tag it will find and ignore the rest
document.querySelector("h1");

// to select all the elements we have to use query selector all
document.querySelectorAll("p");
