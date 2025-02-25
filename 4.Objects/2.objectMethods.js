// // 1. Object assign() Method : 
// // The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target.
// // Object.assign() is used for cloning an object, to merge objects with the same properties.
// // syntax : Object.assign(target, ...sources);

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const new_obj1 = Object.assign({name:"nikita"}, obj1, obj2);   // can copy single or multiple objects.
// console.log(new_obj1);

// const obj3 = { a:21, b:67, name:"rani" };
// const new_obj2 = Object.assign({name:"nikita"}, obj1, obj2, obj3);      // value gets overwritten (based on order of parameter)
// console.log(new_obj2);



// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 2. Object create() Method :
// // JavaScript object.create() method is used to create a new object with the specified prototype object and properties.
// //syntax : Object.create(prototype[, propertiesObject])
 
// function fruits() {
//     this.name = 'fruit 1';
//   }
  
// function apple() {
//     fruits.call(this);
// }
  
// apple.prototype = Object.create(fruits.prototype);
// const app = new apple();
// console.log(app.name);



// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 3. Object defineProperty() Method : 
// // defines a new property or modify the existing property directly on an object and return the object. 
// // syntax : Object.defineProperty(obj, prop, descriptor)

// const geek1 = {
//     fname: "nikita"
// };

// Object.defineProperty(geek1,"lname", {
//     value: "rani",  // Define the value of the lname property   (default value : undefined)
//     writable: true, // Optional: Set to true if you want to allow the property to be modified  (default value : true)
//     enumerable: true, // Optional: Set to true if you want the property to show up in loops   (default value : true)
//     configurable: true // Optional: Set to true if you want to change the property later   (default value : true)
// });
// console.log(geek1);
// console.log(geek1.lname);

// geek1.lname = "sharma";
// console.log(geek1.lname);




// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 4.  Object defineProperties() Method
// // The Object.defineProperties() method in JavaScript is a standard built-in Object that defines a new or modifies existing properties directly on an object and it returns the object.
// // syntax: Object.defineProperties(obj, props) 


// const geek = {};

// Object.defineProperties(geek, {
//     name: {
//         value: "nikita"
//     },
//     lname: {
//         value: "rani"
//     },
//     age: {
//         value: 22
//     }
// });
// console.log(geek);
// console.log(geek.name);



// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 5. Object entries() Method : 
// // The Object.entries() method in JavaScript is used to retrieve an array of an object’s enumerable property [key, value] pairs.
// // Syntax: Object.entries(obj);
// // use : Iterating over Objects, Converting Objects to Arrays, Transforming Objects:
// //The Object.entries() method only includes enumerable properties in the returned array


// const obj = { 10: 'adam', 200: 'billy', 35: 'chris' };
// console.log(Object.entries(obj));

// //Iterating over Objects
// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// // Converting Objects to Arrays
// const entries = Object.entries(obj);
// console.log(entries[1]);
// console.log(entries[1][0]);

// // Transforming Objects:
// const transformed = Object.entries(obj).map(([key, value]) => [key, value.toUpperCase()]);
// console.log(transformed);

// //Handling Arrays: Object.entries() can be applied to arrays to get index-value pairs.
// const arr = ['Apple', 'Banana', 'Cherry'];
// const arrEntries = Object.entries(arr);
// console.log(arrEntries);



// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 6. Object freeze() Method: 
// // The Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.
// // syntax: Object.freeze(obj)


let details = {
    name : "uaer1",
    age : 32
}
// // const new_details = Object.freeze(details);
// // new_details.fname = "nikita";
// // console.log(new_details);
// // details.fname = "nikita";
// // console.log(details);
// // { name: 'uaer1', age: 32 }
// // { name: 'uaer1', age: 32 }
// // Object.freeze() shallow freezes the object at the top level. If you freeze an object and have multiple references to it (like details and new_details), those references will all point to the same frozen object.
// // but to avoid freezing the original object while freezing a copy, make sure to create a copy of the object before freezing it (e.g., using the spread operator or Object.assign()).

// const new_details = Object.freeze({...details});
// new_details.fname = "nikita";
// console.log(new_details);
// details.fname = "nikita";
// console.log(details);



// //-----------------------------------------------------------------------------------------------------------------------------------------------------------
// // 7. Object getOwnPropertyDescriptor() Method :
// // enables the full information on a property (like value, enumerable, writable,configurable) to be accessed and returns a property descriptor for the own property of a given object. 
// // syntax: Object.getOwnPropertyDescriptor( obj, prop )

// const descriptor1 = Object.getOwnPropertyDescriptors(details,"age");
// console.log(descriptor1);
// console.log(descriptor1.age);
// console.log(descriptor1.name.enumerable);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 8. Object getOwnPropertyNames() Method :
// returns all properties that are present in a given object except for those symbol-based non-enumerable properties.
// syntax: Object.getOwnPropertyNames(obj)

const presentObject = Object.getOwnPropertyNames(details);
console.log(presentObject);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. Object getPrototypeOf() Method : 
//check the prototype of an object that the user has created. It is used to check whether two objects have the same prototype or not. The prototype here means the internal definition of the object that is defined by the user. 
//syntax: Object.getPrototypeOf(created_object);
console.log(details);
console.log(Object.getPrototypeOf(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 10. Object hasOwn() Method :
// check if the object has the specified property or not. It returns true if the property exists else false. 
console.log(Object.hasOwn(details,"name"));
console.log(Object.hasOwn(details, "user1"));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 11. Object is() Method :
// compare if two values are the same value. Returns true if the values are the same, and false otherwise. 
// It differs from the strict equality operator === in the handling of NaN and positive/negative zero.
console.log(0 === -0);
console.log(Object.is(0,-0));
console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 12. Object isExtensible() Method : 
// checks whether an object is extensible or not(i.e. if we can add new properties to the object or not).

console.log(Object.isExtensible(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 13. Object isFrozen() Method :
// determine if an object is frozen or not. 

console.log(Object.isFrozen(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 14. Object isSealed() Method :
/*
JavaScript object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below-mentioned conditions hold true :
-If it is not extensible.
-If all of its properties are non-configurable.
-If it is not removable (but not necessarily non-writable).
*/
console.log(Object.isSealed(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 15. Object keys() Method :
// t returns an array containing the keys of the object.

console.log(Object.keys(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 16. Object preventExtensions() Method :
// prevents new properties from ever being added to an object and also prevents reassigning of the object’s prototype.

console.log(Object.preventExtensions(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 17. Object seal() Method :
// used to seal an object. Sealing an object does not allow new properties to be added and marks all existing properties as non-configurable. Although values of present properties can be changed as long as they are writable.

console.log(Object.seal(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 18. Object setPrototypeOf() Method :
// sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 19. Object toLocaleString() Method :
//returns a local specific string representation of this object using the locale of the environment. 

let name = ["sahil", "zain", "deepanshu"];
let number1 = 3.45;
let number2 = [23, 34, 54];
let arr = [name, number1, number2];
let string = arr.toLocaleString();
console.log(string);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 20. Object values() Method :
//  return an array whose elements are the enumerable property values found on the object. 

console.log(Object.values(details));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 21. Object __defineGetter__() Method :
// used to bind an object’s property to a function which will be called when the specified property is looked up.



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 22. Object hasOwnProperty() Method:
// checks if an object has a specific property as its own (not inherited).
Object.hasOwnProperty( "name" );



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 23. Object isPrototypeOf()
// checks if an object exists in another object’s prototype chain.
console.log(details.isPrototypeOf());



//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// 24. Object propertyIsEnumerable() Method :
//returns a Boolean indicating whether the specified property is enumerable and is the object’s own property.

console.log(Object.propertyIsEnumerable("name"));

