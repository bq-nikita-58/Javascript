// // // https://jsonplaceholder.typicode.com/posts/1
// // let arr =[];
// // function getDetails(){
// //     for(let i=1; i<=5; i++){
// //         fetch("https://jsonplaceholder.typicode.com/posts/"+i)
// //         .then((response) => {
// //             if (!response.ok) {
// //                 arr.push(response);
// //             } 
// //         })
// //         .catch((){
// //             arr.push("error occured while loading detail");
// //         })
// //     }
// // }

// // // fetch with async

// // async function postData() {
// //     try {
// //       const response = getDetails();
// //     } 
// //     catch (error) {
// //       console.error('Error');
// //     }
// //   }
// // postData();
  


// // function getDetails(){
// //     for(let i=1; i<=5; i++){
// //         fetch("https://jsonplaceholder.typicode.com/posts/"+i)
// //         .then((response) => {
// //             if (!response.ok) {
// //                 arr.push(response);
// //                 console.log("data pushed");
// //             } 
// //         })
// //         .catch(() => {
// //             arr.push("error occured while loading detail");
// //         })
// //     }
// // }

// // let useerId = [1,2,3,4,5];
// // let details = useerId.map(async function postData() {
// //         try {
// //           const response = getDetails();
// //         } 
// //         catch (error) {
// //           console.error('Error');
// //         }
// //     }
// // )

// // console.log(details);



// let arr = [];
// function getDetails() {
//     for (let i = 1; i <= 5; i++) {
//         let value = fetch("https://jsonplaceholder.typicode.com/posts/" + i)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .catch(() => {
//                     return "Error occurred while loading detail";
//                 });
//         arr.push(value);
//     }
// }

// function result(){
//     getDetails();
//     Promise.all(arr)
//         .then((value) => {
//             console.log(value);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// result();

// // // // fetch with async

// // async function postData() {
// //     try {
// //       const response = getDetails();
// //     } 
// //     catch (error) {
// //       console.error('Error');
// //     }

// //     console.log(arr);
// //   }
// // postData();
  
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
console.log(counter2.getValue());


// console.log(1);
// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3), 0);
// console.log(4);

// async function fetchData() {
//     let data = await fetch("https://dummyjson.com/test");
//     return data.json();
// }

// fetchData().then(data => console.log(data));
// // { status: 'ok', method: 'GET' }


// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// console.log('C');