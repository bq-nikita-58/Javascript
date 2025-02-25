// //1. promise.all

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("value 1");
//         // reject("value 1");

//     },2000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         return ("value 2");
//     },2000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("value 3");
//     },2000)
// })

// let all = Promise.all([p1,p2,p3]);
// all.then((value)=>{
//     console.log(value);
//     console.log("all promises resolved");
// })



// //------------------------------------------------------------------------------------------------------------------------------------------------
// // promise.race  : it will display the any promise which will be resolved 1st 

// let all = Promise.race([p1,p2,p3]);
// all.then((value)=>{
//     console.log(value);
//     console.log("all promises resolved");
// })



// //------------------------------------------------------------------------------------------------------------------------------------------------
// // (but there is a problem if the promise that is going to resolve first is rejected then this will give an error 
// // so to handle that error we used  promise.anyOther

// //promise.anyother

// let all = Promise.any([p1,p2,p3]);      // it will give the next value
// all.then((value)=>{
//     console.log(value);
//     console.log("all promises resolved");
// })



// //------------------------------------------------------------------------------------------------------------------------------------------------
// // promise.resolve : make a resolve promise with the given value

// let all = Promise.resolve(p1);      
// all.then((value)=>{
//     console.log(value);
// })



// //------------------------------------------------------------------------------------------------------------------------------------------------
// // promise.reject : make a resolve promise with the given value

// let all = Promise.reject(p1);      
// all.then(()=>{
//     console.log(value);
// })



//------------------------------------------------------------------------------------------------------------------------------------------------
// in promise.all if akk the promises are fulfilled then only it will execute but idf any of the promises fails it will give an error
// there to avoid this case we used promise.allsettled


//promise.allsettled

let p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("value 1");
    },2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // resolve("value 2");
        reject(new Error("Error"));
    },4000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("value 3");
    },6000)
})

let all = Promise.allSettled([p1,p2,p3]);
all.then((value)=>{
    console.log(value);
    console.log("all promises resolved");
})


