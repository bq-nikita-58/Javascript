/*
There are 7 different data types in JavaScript:
    1. String
    2. Number
    3. Boolean
    4. Null 
    5. Object
    6. Symbol
    7. Undefined
*/


//-----------------------------------------------------------------------

// String : Strings are used for holding text.

const name = 'Dimple';
const middle = "suruchi";
const last = `priya`;

// const str ='she's so cool';      (this will give error)
// To remove above error we can do escaping. Escaping is done with a backslash.
const str ='she\'s so cool';        

// using backticks we can have multi-line strings and they maintain the line breaks inside of them.
const multiStr = `I like

pizza`;

//Backticks will be extremely helpful when we want to write HTML code in our JavaScript variables.
const html = `
  <div>
    <h2></h2>
  </div>
`;
 
const str1 = "hello my name is" + name + ". Nice to meet you.";      //concatenation

let str2 = "hello my name is ";
str2 = str2 + name;
str2 = str2 + " Nice to meet you";      // when you put a variable inside of a string is called Interpolation
console.log(str2); 

1+1     //2
"1" + "1"    //11
"1" +  1     //11

const str3 = `hello my name is ${name}. Nice to meet you. I am ${1 + 20} years old`;
//The ${} syntax can only be used in backticks.
console.log(str3); 

 

//-----------------------------------------------------------------------

// Numbers: contain number, whole number, decimal(float)

let num = 123 ;
console.log(typeof num); 
//typeof is a keyword in JavaScript that allows you to check the type of a value.

"10" + "10" //1010
"10" * "10" //100

/*There are four mostly used helper method
  1. Math.round() : It will return to you the number that was passed in, rounded up or down depending on the number.
  2. Math.floor() : It will give you the lower end of that number.
  3. Math.ceil() : It will give you the upper number.
  4.Math.random() : It will give you a random number every time between 0 and 1.
*/

console.log(Math.round(19.2));      // 19
console.log(Math.floor(19.2));      // 19
console.log(Math.ceil(19.2));       // 20
console.log(Math.random(19.2));     

// If you do 10 **, the "**" actually means "to the power of".
console.log(100 ** 2);



//-----------------------------------------------------------------------

// Bollean: A boolean is either true or false.
const age = 18;
const ofAge = age > 19;
console.log(ofAge);     //false

10 == 10      // true
10 === 10       // true
"10" == 10      // true  ( as  == only check that the value is same )
"10" === 10       // false  (as  === always checks that the value and type are exactly the same.)



//-----------------------------------------------------------------------

// Objects : It is used to group things together.

const details ={
  fname: "Nikita",
  lname: "rani",
  age: 22,
};
console.log(details);
console.log(details.fname);



//-----------------------------------------------------------------------

// Null : Null is a value of nothing, whereas undefined is a variable that has not yet had a value set to it.

// const undefinedvalue;
// console.log(undefinedvalue);

const nullvalue = null;
console.log(nullvalue);
