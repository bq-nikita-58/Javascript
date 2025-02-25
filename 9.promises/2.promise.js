// callback hell
// Nested call back
// function getData(dataID, getNextData){   
//     setTimeout(() => {
//         console.log('data ' + dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1, () => {
//     console.log("getting data 2 ...")
//     getData(2 , () => {
//         console.log("getting data 3 ...")
//         getData(3)
//     })
// });


// to solve the problem of call back hell we use the concept of promises

// syntax let promise = new Promise((resolve, reject) => {});

// let promise = new Promise((resolve, reject) => {
//     console.log("i an a promise")
//     resolve("success");
//     // reject("some error occured");
// })


// function getData(dataID, getNextData){   
//     return new Promise((resolve, reject) => {
        
//     })
// }



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// promise channing

// const loadScript = (src)=>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             console.log("script has been loaded");
//             resolve(1);
//         }
        
//         script.onerror = () => {
//             reject(0);
//         } 
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// p1.then((value) =>{
//     console.log(value);
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// }).then((value) => {
//     console.log('second script ready')
// })
// .catch((value) => {
//     console.log("an error occure in loading the script")
// })




//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// multiple handler

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    },2000)
})

promise.then((value) =>{
    console.log("1st handler");
})
promise.then((value)=>{
    console.log("2nd handler");
})

promise.then((value) => {
    console.log("3rd handler");
})