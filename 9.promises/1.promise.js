
// Before running this file connect it an an index. html file

// let firstpromise = new Promise((resolve, reject) => {
//     console.log("hii");
//     // resolve(1000);
//     // reject(new Error("Intenal server error"));
// });

// function sayMyName(){
//     console.log("nikita rani");
// }
// setTimeout(sayMyName, 10000);


// // handle using then()- for fulfilled and catch()- for rejected
// let Promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve("promise fullfilled");
//     }
//     else{
//         reject('promise rejected');
//     }
// });

// Promise1.then((Message) => {
//     console.log("then ka message is " + Message);

// })
// .catch((error) =>{
//     console.log("error: " + error);
// })
// .finally((Message) =>{
//     console.log("it will run any how");
// })



//------------------------------------------------------------------------------------------------------------------------------
// multiple then()
let promise1 = new Promise((resolve, reject)=> {
    let success = true;
    if(success) {
        resolve(10);
    }
    else {
        reject("Internal Server Error");
    }
});

promise1.then((message)=> {
    console.log("first msg:" + message);
    return 20;    // javascript imidiately convert it to new resolved value 
}).then((message)=> {
    console.log("second msg: " + message);
    return 30;
}).then((message)=> {
    console.log("third msg: " + message);
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("Main to final hu, chalunga pakka")
})


// handling multiple promises


// let promise1 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 1000, "First");
// })
// let promise2 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 2000, "Second");
// })
// let promise3 = new Promise((resolve, reject)=> {
//     // setTimeout(reject, 4000, "Third");
//     setTimeout(resolve, 4000, "Third");

// })

// Promise.all([promise3, promise2, promise1])
// .then((values) => {
//     console.log(values);
// })
// .catch((error)=> {
//     console.error("error:" + error);
// })