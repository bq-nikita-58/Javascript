// 1. For loop:-

const numbers= [23,12,45,56,67,88,3]
for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);



// For of loop (Works for iterable objects such as arrays, strings, maps, sets.)
const str = "promises await"
for (let i of str) console.log(i);


// For in loop (for in is used for looping over keys of an object.)

const str1 = "promises await"
for (let i in str1) console.log(i);  // outputs index ( as here indexes are keys)

const str2 = "promises await"
for (let i in str2) console.log(str2[i]);  // outputs letters

const wes = {
    name: 'wes',
    age: 100,
    cool: true
}
console.log(Object.entries(wes));
for (const prop in wes) console.log(prop); //output keys of object wes



//----------------------------------------------------------------------------------------------------
// 2. while loop
{
    let i = 1;
    while (i < 3) {
        console.log('You are cool');
        i++;
    }
}



//----------------------------------------------------------------------------------------------------
// 3. Do while loop
{
    let i = 1;
    do{
        console.log('You are cool');
        i++;
    }
    while (i < 3) 
}