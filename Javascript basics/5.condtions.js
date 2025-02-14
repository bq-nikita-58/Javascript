// taking input from user
{
let name = prompt("What is your name?");
let num = prompt("What is your favorite number? ");

console.log("Hello " + name + "!");
console.log(num + "?! That's my favorite number too!");
}



//----------------------------------------------------------------------------------------------------
// 1. If / If-else /nested If-else conditions

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

//with function
{
    function slugify(sentence, lowercase){
        if (lowercase) return sentence.replace(/\s/g, '-').toLowerCase();
    else return sentence.replace(/\s/g, '-');
    }
    alert(slugify('I am very cool',true));
    alert(slugify('I am very cool',false));
}



//----------------------------------------------------------------------------------------------------

// 2. Switch Case
/* syntax:
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // this will execute if any cases does not match (optional)
} 
*/

{ 
let day;
alert(new Date().getDay());
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
  }
alert(day);
}



//----------------------------------------------------------------------------------------------------
// 3. For loop:-

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
// 4. while loop
{
    let i = 1;
    while (i < 3) {
        console.log('You are cool');
        i++;
    }
}



//----------------------------------------------------------------------------------------------------
// 4. Do while loop
{
    let i = 1;
    do{
        console.log('You are cool');
        i++;
    }
    while (i < 3) 
}