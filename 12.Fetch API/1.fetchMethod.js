// get data

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();  
//   })
//   .then((data) => console.log(data))  
//   .catch((error) => console.log('There was a problem with the fetch operation:', error));



// //-----------------------------------------------------------------------------------------------------------------------------
// // post an data 
// const data = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',  // 
//     headers: {
//       'Content-Type': 'application/json'  
//     },
//     body: JSON.stringify(data)  
//   })
//     .then((response) => {
//         console.log(response.status);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.title);
//     })    
//     .catch(error => console.log('Error:', error));  



//-----------------------------------------------------------------------------------------------------------------------------
// handling errors

fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then(response => {
    if (!response.ok) {
      let error = new Error('HTTP error! Status: ' + response.status);
      return error;
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
