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


  // another example

  function outerFunction() {
    let outerVariable = 'I am from the outer scope';

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction; // Returning the inner function
}

const closureExample = outerFunction(); // outerFunction is executed, but innerFunction is returned
closureExample(); // Output: I am from the outer scope
