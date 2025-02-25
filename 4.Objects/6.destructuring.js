// assign array values and object properties to distinct variables
let article = { 
    id: '001', 
    title: 'JavaScript Object Destructuring', 
    writer: 'Chameera'
};

// normal way 
// let id = article.id; 
// let title = article.title;
// let writer = article.writer;
// console.log(writer);

// by destructuring
let { id, title, writer } = article;
console.log(id);

// let { no, title, writer } = article; // generate error same name should be used
// console.log(no);

// to cahnge the variable name when acessing from object
let{id : Id , title : book, writer : author } = article;
console.log(author);


// 1. Array Destructuring
const arrValue = ['one', 'two', 'three'];
const [x, y, z] = arrValue;
console.log(x); // one


// 2. Assign Default Values

let arr = [10];
let [a ,  b = 7] = arr;

console.log(a); // 10 from arr is assigned to a
console.log(b); // 7


//3. Swapping Variables
let num1 = 40;
let num2 = 70;
[num1, num2] = [num2, num1];
console.log(num1); // 70
console.log(num2); // 40


// 4. Skip Items
const arr2 = ['one', 'two', 'three'];
const [p, , q] = arr2;
console.log(p); // one
console.log(q); // three


// 5. Assign Remaining Elements to a Single Variable

const arr3 = ['one', 'two', 'three', 'four'];
const [c, ...d] = arr3;
console.log(c); // one
console.log(d); // ["two", "three", "four"]

// // throws an error
// const [ ...c, d] = arr3;
// console.log(c); // eror: synrax error (Rest element must be last element)


// 6.Nested Destructuring 

const arr4= ['one', ['two', 'three']];
const [r, [s, t]] = arr4;
console.log(t); // one
