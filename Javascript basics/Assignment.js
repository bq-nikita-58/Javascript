function multiply(a,b){
    return a*b;

}

let sum = (a,b)=>{a+b};


//calling method

// auto invocation ()

(function (x,y){
    return x-y
})();

// 
const tarun ={
    first_name : "Tarun",
    second_name: "Dubey",
    fullname() {
        console.log(this.first_name + this.second_name);
    }
};

const person1 ={
    first_name: "mayank",
    second_name:"Jha",
    
}
tarun.fullname.call(person1);
tarun.fullname.apply(person1);

let td=tarun.fullname.bind(person1);
setTimeout(td, 3000);
var counter=0;










