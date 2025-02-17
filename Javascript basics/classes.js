class Human1 {
    //properties
    age=13; // public
    #wt = 80; //private
    ht = 180;

    //behaviour

    walking(){
        console.log("I am Walking ",this.#wt);
    }

    #running() {
        console.log("I am running")
    }
}

let obj = new Human1;
console.log(obj.age);
// console.log(obj.#wt);   (private variable)
obj.walking();
// obj.#running();    (private function)



//--------------------------------------------------------------------------------------------------------------------------
//get and set

class Human2 {
    //properties
    age; // public
    #wt = 80; //private
    ht = 180;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    //behaviour

    walking(){
        console.log("I am Walking ", this.#wt);
    }

    running() {
        console.log("I am running")
    }

    get fetchWeight() {
        return this.#wt;
    }

    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj1 = new Human2(15,50,158);
console.log(obj1.fetchWeight);
obj1.walking();



//--------------------------------------------------------------------------------------------------------------------------
// default parameter

function solve(value) {
    console.log("HELLO JII -> ", value);
}
solve();


// solve(undefined);
function sayName(fName = "Uday", lName = fName.toUpperCase()) {
    console.log("My Name is: ", fName," ", lName);
}
sayName();
sayName("name");



//--------------------------------------------------------------------------------------------------------------------------
//pass defaul parameter as function
function getAge() {
    return 190;
}


function utility(name = "nikita", age = getAge()) {
   console.log(name, " ", age); 
}

utility();
