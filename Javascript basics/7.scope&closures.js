/*
Scope determines the accessibility (visibility) of variables.
    - Block scope
    - Function scope
    - Global scope

*/

//  Block scope 
//  - Variables declared inside a { } block cannot be accessed from outside the block.
{
    let x = 2;
}
console.log(x); // cannot be asscessed

//  Variables declared with the var keyword can NOT have block scope.
{
    var x = 10;
}
console.log(x);

  
//   Function scope
//  - Each function creates a new scope.
//  - Variables defined inside a function are not accessible (visible) from outside the function.
//  - Variables declared with var, let and const are quite similar when declared inside a function.
function myFunction() {
    let carName = "Volvo";  
}
  

//  Global Scope
//  - A variable declared outside a function or block scope becomes GLOBAL.
//   - Global variables can be accessed from anywhere in a JavaScript program.
//   - Variables declared with var, let and const are quite similar when declared outside a block.
const y = 2;      



//------------------------------------------------------------------------------------------------------------------------------
// Hosting
/*
Hoisting in JavaScript allows you to access functions and variables before they have been created.
JavaScript only hoists declarations, not initializations.

1. Hoisting Function Declarations
-They are hoisted, meaning you can call them before their actual definition in the code.
Example:
sayHi();
function sayHi() {
  console.log('hey!');
}

2. Variable Declarations:
-Variables defined with let and const are hoisted to the top of the block, but not initialized.
-The block of code is aware of the variable, but it cannot be used until it has been declared.
Example:
age = 21
console.log(age);       //error
let age = 10;

age = 21
console.log(age);       // 21
var age = 10;

3. Function Expressions and Arrow Functions:
- These are not hoisted. If you try to call them before they are defined, it will get an error.


In summary, hoisting allows functions (declarations) and variables (with var) to be used before they are declared, 
but let, const, and function expressions do not behave this way.

*/



//------------------------------------------------------------------------------------------------------------------------------
// Closures :-
// A closure is the ability to access a parent level scope from a child scope, even after the parent function has been terminated.

function outer() {
    function inner() {
      const innerVar = "hey I am an inner var";
      console.log(innerVar);
      console.log(outerVar);
    }
    const outerVar = "Hey I am the outer Var";
    return inner;

  }
  const innerFn = outer();
  console.log(innerFn);