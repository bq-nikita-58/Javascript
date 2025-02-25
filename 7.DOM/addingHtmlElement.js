// let fheading = document.createElement('h1');
// fheading

// fheading.textContent = "My name is Nikita";
// fheading

// let bodytag = document.querySelector('body');
// bodytag
// bodytag.appendChild(fheading);      // child is added at the end


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// insertAdjacentElement()
// add child at specific position

let mydiv = document.querySelector('#mydiv');
console.log(mydiv);

let newElement = document.createElement('span');
console.log(newElement);
newElement.textContent = " this is span tag";
console.log(newElement);

mydiv.insertAdjacentElement('beforebegin',newElement);
// mydiv.insertAdjacentElement('afterbegin',newElement);
// mydiv.insertAdjacentElement('beforeend',newElement);
// mydiv.insertAdjacentElement('afterend',newElement);