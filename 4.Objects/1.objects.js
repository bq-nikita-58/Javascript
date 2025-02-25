let obj= {
    name : "nikita",
    "full name":"nikita rani"
}
console.log(obj);
console.log(obj.name);
console.log(obj["full name"]);


const obj1 = {
    name : "nikita",
    age : "21",
    func : function(){
        console.log(`hello my name is ${obj1.name}.`);
    }
};

console.log(obj1.func());



//--------------------------------------------------------  Different ways to create Objects  -------------------------------------------------------------------------------

// 1. Creating Objects Using Object Literals
const person1 = {
    name: "John Doe",
    age: 30
};
console.log(person1);
console.log(person1.age);


// 2. Object with Methods
const person2 = {
    name: "Jane Doe",
    age: 28,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person2.greet();


//2. Creation Using new Object() Constructor
let obj2 = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"

console.log(obj);


// 3. Creating Objects Using Constructor Functions
function Person3(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}
const user1 = new Person3("Alice", 24);
const user2= new Person3("Bob", 22);
user1.greet();
user2.greet();
user1.color = "red";
console.log(user1);
console.log(user2);


// 4. Creating Objects Using the Object.create() Method
const prototypePerson = {
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

const person4 = Object.create(prototypePerson);
person4.name = "Charlie";
person4.age = 27;
person4.greet();
person4.dest = "jhdbhsv";
console.log(person4);


// 5. Creating Objects Using ES6 Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const person5 = new Person("Diana", 35);
person5.greet();



//--------------------------------------------------------  operation on  Objects  -------------------------------------------------------------------------------

let details = {
    fname : "Nikita",
    lname : "Rani",
    age : "17"
}
console.log(details);

// 1. Accessing Object Properties
console.log(details.fname,details.lname);

// 2. Modifying Object Properties
details.age = 21;
console.log(details.age);

// 3. Adding Properties to an Object
details.color = "yellow";
console.log(details);

// 4. Removing Properties from an Object
delete details.color;
console.log(details);

// 5. Checking if a Property Exists
console.log("color" in details);
console.log(details.hasOwnProperty("fname"));

// 6. Iterating Through Object Properties
for (let key in details) {
    console.log(key + ": " + details[key]);
}

// 7. Merging Objects
// Objects can be merged using Object.assign() or the spread syntax { …obj1, …obj2 }.
let ob1 = { name: "yash" };
let ob2 = { age: 19};

let ob3 = { ...ob1, ...ob2 };
console.log(ob3);
//The spread operator (...) in JavaScript allows you to "spread" or "unpack" elements of an iterable (like an array or object) into individual elements.

// 8. Object Length
console.log(Object.keys(details).length); 

console.log(Object.keys(details));
console.log(Object.values(details));

//--------------------------------------------------------  operation on  Objects  -------------------------------------------------------------------------------

function toGreet() {
    console.log("Hello There!");
}

let myObj = {

    // Mention Function-Name as Value.
    greet: toGreet,

    // Define Function implicitly.
    byWhom: function() {
        console.log(" - GeeksforGeeks.org");
    }
}

myObj.greet();
myObj.byWhom();


// Converting a JSON Text to a JavaScript Object
//To convert a JSON text to a JavaScript object, you can use the JSON.parse() method.




const jsonString = '{"name": "GFG", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name); 
console.log(jsonObject.age); 