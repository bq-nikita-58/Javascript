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


//-------------------------------------------------------------------

/*
Difference between var and let:-
Let :- 
-let work at block scope level (its access is limited to the block in which it is declared)
-Prevents accidental variable access: If you want to keep a variable strictly within a specific block (like within a loop or conditional), let ensures it isn't accessible outside.

case 1:-
{
    let b = 30;
}
console.log(b); // error: b is not defined

case 2:-
{
    let c = 1;
    {
        let c = 10
        console.log(c);   // 10
    }
    console.log(c);    // 1
}

case 3:-
let a =10;
function f(){
    let a = 20;
    console.log(a); //20
    {
        let a=100;
        console.log(a); //100
    }
    console.log(a); //20
}
f();
console.log(a); //10

Example:-
for(let a = 2 ; a>0; a--){
    for(let a = 5 ; a>0; a--){
        console.log(a);  // 5 > 4 > 3 > 2 > 1 > 5 > 4 > 3 > 2 > 1
    }
}


VAR:-
-var work at global level (Var can be declared and accessed globally)
-var makes the variable available throughout the entire function, which can sometimes create issues if you're not expecting the variable to leak outside a block.

case 1:-
{
    var a = 20;
}
console.log(a); // output 20

case 2:-
{
    var c = 1;
    {
        var c = 10
        console.log(c);   // 10
    }
    console.log(c);    // 10
}

case 3:-
var a =10;
function f(){
    var a = 20;
    console.log(a);   //20
    {
        var a=100;
        console.log(a);   // 100
    }
    console.log(a);   //100
}
f();
console.log(a); //10

Example :
for(var a = 2 ; a>0; a--){
    for(var a = 5 ; a>0; a--){
        console.log(a);   // 5 > 4 > 3 > 2 > 1
    }
}

*/
