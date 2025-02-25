// apply , call, bind

// problem statement

let userDetails = {
    name : "nikita",
    age : 30,
    designation : "software Engineer",
    printDetails : function(){
        console.log(this.name);
    }
}
userDetails.printDetails();

let userDetails2 = {
    name : "rani",
    age : 29,
    designation : "software Engineer"
}

// function borrowing
// to acess the function present in object userDetails we  for object userDetails2
userDetails.printDetails.call(userDetails2);

// what if function is outside the object
let printDetails = function(){
    console.log(this.name);
}
printDetails.call(userDetails2);

// pass parameter
let printDetails1 = function(state, country){
    console.log(this.name + " " + state + " " + country);
}
printDetails1.call(userDetails2, "Delhi", "India");


// Apply : Instead of passing argument one by one we can use arratylist

printDetails1.apply(userDetails2, ["Delhi", "India"]);


// bind - we can create copy of function and invoke later
let newfun = printDetails1.bind(userDetails2, "Delhi", "India");
newfun();
console.log(newfun);