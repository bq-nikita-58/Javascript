// math object

console.log("abcd");

console.log(Math.PI);

console.log(Math.max(60,30,24,600,712,89));

console.log(Math.min(60,30,24,600,712,89));

console.log(Math.round(1.4));

console.log(Math.ceil(1.1)); // just bigger integer

console.log(Math.abs(-5));   

console.log(Math.random());     // generate random no between 0 to 1

console.log(Math.sqrt(5));

console.log(Math.pow(2,10));



//------------------------------------------------------------------------------------------------------------------------

//date object


let curr = new Date();
console.log(curr);

let date = new Date('June 20 1998 07:15');
console.log(curr);

let newDate = new Date(1998, 5, 20, 7);
console.log( newDate );
console.log(newDate.getDay());

console.log(newDate.setFullYear(2001));  // set value(modify)
console.log( newDate ); 



