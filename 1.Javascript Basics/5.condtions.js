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
