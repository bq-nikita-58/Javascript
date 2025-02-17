// clonning objects

let src = {
    age:12,
    wt:68,
    ht:180
};

// let arr = src;
// console.log(arr);

// let dest = {...src};   // using spread opeerator

// let dest = Object.assign({},src);    //using assign method

let src2 = {
    value:101,
    name: "Love babbar"
}

// let dest = Object.assign({}, src, src2);  // clone two objects

// using iteration
let dest = {};
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

console.log(src);
console.log(dest);

