// 1. Nested object destructuring
let article = { 
    id: '001', 
    title: 'JavaScript Object Destructuring', 
    writer: {
      name: 'Chameera'
    }
};

let {id: articleId, title: articleTitle, writer: { name: writerName }} = article;
console.log(articleId); 
console.log(writerName); 


// 2. Destructuring function arguments
let article1 = { 
    title: 'JavaScript Object Destructuring',
    writer: 'Chameera'
  };
  
  let displayDetails = ({title,writer}) => {
    console.log(title); 
  };
  
  displayDetails(article);


// 3. Destructuring with default values

let article2 = { 
    title: 'JavaScript Object Destructuring',
    subtitle: 'Top 7 JavaScript Object Destructuring Techniques',
    writer: 'Chameera'
  };
  
  let { title, subtitle = 'No Sub Title', writer} = article2;
  
  console.log(title); // JavaScript Object Destructuring
  console.log(subtitle); // Top 7 JavaScript Object Destructuring Techniques
  console.log(writer); // Chameera
//If the object contains a subtitle, the real value will be assigned to the variable. If not, default values will be assigned.



// 4. Destructuring Functions retrurn value
function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
} 
let [greeting,pronoun] = getArray();
console.log(greeting);//"Hello"
console.log(pronoun);//"I"

// 5. Destructuring null objects
function getArticle() {
    return null;
}
  
//   let { title1, subtitle1} = getArticle(); // reference  Error
let { title1, subtitle1} = getArticle() || {}; // No Error
console.log(title1); // undefined


// 6. Assigning dynamic object keys
//using different variable as the object key to only fetch the required value.
let users = {
    Paul: 'Software Engineer',
    Mike: 'Senior Software Engineer',
    George: 'Team Lead'
};
let { Mike : selectedUser } = users;
console.log(selectedUser); 


// 7. Combined object and array destructuring
let languages = [
    { id: 1, name: 'Java' }, 
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'C' }, 
    { id: 4, name: 'Python' },
    { id: 5, name: 'C#' },
];
  
let [, , , { id,name }, , , ] = languages;
  
console.log(id);




// -------------------------------------------------------------------------------------------------------------------------------------------
// Extrs examples
  let person = {
    name: "Geek",
    age: 25
};
function greet({ name, age }) {
    console.log(name + " " + age );
}

// function greet(person){
// console.log(person.name + " " + person.age);
// };

greet(person);

