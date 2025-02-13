/*
Variables are containers that are used to store data values.
JavaScript Variables can be declared in 4 ways:
    1. Automatically
    2. Using var
    3. Using let
    4. Using const
*/

//-------------------------------------------------------------------

/*
AUTOMATICALLY :-
- use identifiers to store value
- javascript introduced a new mode into browsers named strict mode, which will throw an error if you try to do something like not declaring a variable properly.
*/

age = 22;       //Integer type
name = "nikita";        //String type

console.log(age);
console.log(name);


//-------------------------------------------------------------------

// VAR (It can be updated and re-declared in the same scope.)

var a = 10;
var a = 8;      // re-declaration  allowed
a = 7;

console.log(a);     // output 7


//-------------------------------------------------------------------

// LET (It can be updated but cannot be re-declared in the same scope.)

let b = 20;
// let b = 30; (not allowed)
b = 10;     // allowed
function f() {
    let b = 9;      // allowed
    console.log(b);     // output = 9
}

f();
console.log(b);     // output = 10


//-------------------------------------------------------------------

// CONST (It can neither be updated or re-declared in any scope.)

const arr = {
    num1 : 10 ,
    num2 : 20 
}

arr.num1 = 30;        //allowed

// arr = {
//     num3 :20
// }

console.log(arr.num1);


