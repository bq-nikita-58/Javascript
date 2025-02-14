/*
The main types of JavaScript operators include:
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Bitwise Operators
    6. String Operators
    7. Conditional (Ternary) Operator
    8. Type Operators
    9. Comma Operator
    10. Unary Operators

*/


//--------------------------------------------------------------------------------
// 1. Arithmetic Operators (+,-,*,/,%,++,--)
{
let num1 = 100;
let num2 = 10;
let res;

console.log(num1+num2);     //addition - 110
console.log(num1-num2);     // 90
console.log(num1*num2);     // 1000
console.log(num1/num2);     // 10
console.log(num1%num2);     // 0
console.log(num1++);     // 100 (Return the operand and then increase by one)
console.log(--num2);     // 9 (Decrease operand by one and then return)
console.log(num1+true);     // 102 (added 1 to num1)
console.log(num1+false);     // 101 (added 0 to num1)
console.log(num1+null);     // 101 (added 0(null) to num1)
}


//--------------------------------------------------------------------------------
// 2.Assignment Operators(=)

let num4 = 100;
num4 += 55;  // num1 = num1+10
console.log(num4);



//--------------------------------------------------------------------------------
// 3. Comparison Operators (==,!=,===(strict equality),!==(strict inequality),>,<,>=,<=)

let x = 5;
let y = '5';
console.log(x == y);    // true (coerces string '5' to number)
console.log(x != 6);     // true (5 is not equal to 6)
console.log(x === y);     // false (same value but different type)
console.log(x !== y);     // true (different types: number vs string)
console.log(x > 0);      // true (5 is greater than 0)
console.log(x >= 5);      // true (5 is equal to 5)
console.log(x < 0);      // false (5 is less than 0)
console.log(x <= 15);    // true (5 is less than 15)



//--------------------------------------------------------------------------------
// 4. Logical Operators(&&, ||, !)

{

    let age = prompt("what is your age?");
    let licence = prompt("Do you have Driving licence? (yes/no)")
    let flag = false
    if(licence.toLowerCase() == "yes") flag = true;  
    else if(licence.toLowerCase() == "no") flag = false;
    
    age = Number(age);
    
    if(age >= 18 && flag == true) alert("can Drive and have Licence");
    else if(age >= 18 && flag == false) alert("can Drive but don't have Licence");
    else alert("can't Drive");

}



//--------------------------------------------------------------------------------
// 5. Bitwise Operators (& , | , ^ , ~ , >> , << )

{
let x = 5;   
let y = 3;   
//Bit-wise AND (&) returns 1 if both the bits are 1 and 0 in any other case.
console.log(x & y);  // Output: 1 

//Bit-wise OR ( | ) returns 1 if any of the operands is 1 and 0 in any other case.
console.log(x | y);   // Output: 7 

//Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.
console.log(x ^ y);  // Output: 6 

let z = 10;  
console.log(~z);  // Output: -11 (Flips all bits)

let a = 4;   // 0100
console.log(a << 1);  // Output: 8 (1000)
console.log(a >> 1);  // Output: 


let c = 4;   // Binary: 0100
console.log(c >>> 1);  // Output: 2 (Binary: 0010)

}



//--------------------------------------------------------------------------------
// 6. String Operators (JavaScript compares strings lexicographically (i.e., by comparing their Unicode values).
// a=97 ... z=122 and A=65 ... Z=90 and 0=48 and 9=57

{
let s1 = "age";
let s2 = "bat";

console.log(s1 < s2);  // true
console.log(s1 > s2);  // false
console.log(s1 <= s2); // true
console.log(s1 >= s2); // false

let s3 = "gfg"; // Primitive Type
let s4 = new String("gfg"); // Object type

console.log(s3 === s4); // false

}



//--------------------------------------------------------------------------------
// 7. Conditional (Ternary) Operator
// syntax: condition ? trueExpression : falseExpression

{
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";
console.log(res);
}

// nested ternary
{
let marks = 95;
let res = (marks > 80) ? (marks > 90 ? "Excellent" : "Good") : "Average";
console.log(res);
// if marks > 90 Excellent
// if marks > 80 good
// if marks < 80 Average
}
