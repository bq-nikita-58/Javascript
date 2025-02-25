// basic request

// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (response.status == 200) {
//         const data = await response.json();
//         console.log(data);      }
      
//     } catch (error) {
//       console.error('There was a problem with the fetch operation');
//     }
//   }
// fetchData();



//----------------------------------------------------------------------------------------------------------------------

// 2. Sending Data with POST Method (Async/Await)

async function postData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  try {
    const response = await fetch(url, {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify(data)  
    });
    console.log(response.status);
    if(response.status == 201) {
      const responseData = await response.json();
      console.log('Response from POST:', responseData);      }
  } 
  catch (error) {
    console.error('Error in POST request:');
  }
}
postData();
