// function definition
{
function calculateBill() {
    // this is the function body
    console.log("Running Calculate Bill!!");
    const total = 100 * 2.3;        // 229.99999999999997
    return total;
}
const total = calculateBill();        // function call 
console.log(total);
}



//----------------------------------------------------------------------------------------------------------------------------
// function with parameters and arguments
//(parameters are placeholders. The actual values that you pass in when calling a function are what are called arguments.)
{
function calculateBill(billAmount, taxRate) {
    console.log("Running Calculate Bill!!");
    const total = billAmount * (1 + taxRate);
    return total;
}
const myTotal = calculateBill(100, 0.13);  
console.log(myTotal);
}



//----------------------------------------------------------------------------------------------------------------------------
// Different ways to declare a function

//case 2 :- Anonymous function : function without a name.
// function(firstName) {
//     return `Dr. ${firstName}`;
//   }

//case 1 :-  Function expression: A function expression is when you store a function as a value in a variable.
const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
  };
console.log(doctorize("wes"));



//----------------------------------------------------------------------------------------------------------------------------
// Hosting (Functions that are declared with the function keyword are called hoisted.)

/* 
What is the difference between doing a function declaration and a function expression? 

doctorize("wes");
console.log(doctorize2("wes"));
const doctorize = function (firstName) {        // give error
  return `Dr. ${firstName}`;
};
function doctorize2 (firstName) {
  return `Dr. ${firstName}`;
}

- Function declaration work if you call it before you define it, but a function expression does not.
- In Function declaration JavaScript will take functions and bring them up to the top of the code before they are called. This gives us the ability to run a function before it is defined.
- But in function expression JavaScript does not hoist variable functions

*/



//----------------------------------------------------------------------------------------------------------------------------
// Arrow Functions
/*
Arrow functions are also anonymous functions, which means there is no way to declare an arrow function the way we do a function declaration.
They have a few benefits:-
    - concise syntax and tend to be shorter
    - allow for writing one line functions
    - do not have their own scope in reference to the this keyword
    - " => " this is called fat arrow.
*/
{
    const inchToCM = (inches) => {
        return inches * 2.54;
    };
    console.log(inchToCM(1.5)+" cm");
}


// An explicit return is when you type the return keyword before returning a value.
{
    const inchToCM = (inches) => {
        return inches * 2.54;
    };
}


// An implicit return is returning it without actually having to type the keyword return. Arrow functions allow us to use implicit returns.
const inchToCM = (inches) => inches * 2.54;


// normal anonymous functions
{
    const add = (a, b = 3) => {
        const total = a + b;
        return total;
    };
}
// Arrow function
const add = (a, b = 3) => a + b;



//----------------------------------------------------------------------------------------------------------------------------
// to create a function is using an IIFE (immediately invoked function expression)(iffy).
// It wrap the function in a parentheses, (parentheses always run first in JavaScript), and it will return a function value and you can immediately run that function by putting parentheses on the end.
(function () {
    console.log("Running the Anon function");
    return `Your are cool`;
  })();

  (function (age) {
    console.log("Running the Anon function");
    return `Your are cool and ${age}`;
  })(22);



//----------------------------------------------------------------------------------------------------------------------------
// returning function

function multiplier(factor) {
  return function(number) {
      return number * factor;
  };
}

const double = multiplier(2);
console.log(double(20)); 


//----------------------------------------------------------------------------------------------------------------------------
// callback function

function printDate(data) {
  console.log(data);
}

function fetchData(func) {
      const data = "8th Aug";
      func(data);
}

fetchData(printDate); 