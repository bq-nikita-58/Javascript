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