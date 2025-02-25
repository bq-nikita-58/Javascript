// function addTwoValues(x){
//     return function(y) {
//         return x + y;
//       };
// }


// const addNumber = addTwoValues(10)
// console.log(addNumber(27)); 
// console.log(addNumber(29)); 
// console.log(addNumber.x)  


// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;  
//     };
// }

// const Increment = counter();

// Increment();
// Increment();
// console.log(Increment()); 



// function counter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//         },
//         decrement: function () {
//             count--;
//         },
//         getValue: function (){
//             return count;
//         },
//         add : function(x){
//             return count+x;
//         }
//     };
// }

// const options = counter();

// options.increment(); 
// // options.decrement();
// console.log(options.getValue());
// console.log(options.add(24));




function counter(maxcount) {
    let count = 0;

    return {
        increment: function () {
            if(count < maxcount){
                return ++count;
            }
            else {
                console.log("you have reached maximum limit");
                return count;
            }
        },
        decrement: function () {
            count--;
        },
        getValue: function (){
            return count;
        },
        add : function(x){
            return count+x;
        }
    };
}

const options = counter(3);
console.log(options.increment());
console.log(options.increment());
console.log(options.increment());
console.log(options.increment());
console.log(options.increment());
console.log(options.increment());

