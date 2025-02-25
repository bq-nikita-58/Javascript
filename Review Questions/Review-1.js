// // 1.Basic function declaration
// function printMsg()
// {
//   console.log("Hello");
// }
// console.log(printMsg());


// // 2.Function with parameters
// function add(num1, num2)
// {
//   console.log(num1+num2)
// }
// console.log(add(10,20));


// // 3.Return function
// function add(num1, num2)
// {
//   return num1+num2;
// }
// console.log(add(10,20));


// // 4.Function expression
// const func1 = function(num1, num2)
// {
//   return num1+num2;
// }
// console.log(func1(10,20));


// // 5. Arrow Function with explicit return
// const func2 = (a,b) => {
//   return a*b;
// }
// console.log(func2(10,20));


// // 5. Arrow Function with explicit return
// const func3 = (a,b) => a*b;
// console.log(func3(10,20));


// // 6.iffy function
// (function () {
//     console.log("hello");
//   })();


// // 7. Returning function
// function mul(number1) {
//   return function(number2) {
//       return number2 * number1;
//   };
// }
// const ans = mul(2);
// console.log(ans(20)); 


// // 8. callback function
// function greetings()
// {
//   console.log("welcome");
// }

// function printMsg(func){
//   func();
//   console,log("This is Nikita");
// }
// console.log(printMsg(greetings));


// create function inside object

// let cal = {
//     num1 : "0",
//     num2 : "0",
//     add : function(){
//       return cal.num1+cal.num2;
//     },
//     sub : function(){
//       return cal.num1-cal.num2;
//     },
//     mul : function(){
//       return cal.num1*cal.num2;
//     }
//   };
  
//   cal.num1 = 1;
//   cal.num2 = 30;
//   console.log(cal.add());
//   console.log(cal.sub());
//   console.log(cal.mul());


let cal = {
    num1 : 10,
    add : function(num2){
      return cal.num1+num2;
    },
    sub : function(num2){
      return cal.num1-num2;
    },
    mul : function(num2){
      return cal.num1*num2;
    }
  };
  
  console.log(cal.add(20));
  console.log(cal.sub(6));
  console.log(cal.mul(10));
  

