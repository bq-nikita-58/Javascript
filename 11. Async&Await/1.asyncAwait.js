async function name() {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("user1");
        },2000)
    })
    
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("user2");
        },4000)
    })
    console.log("fetching user1 .....");
    let user1 = await p1
    console.log("fetched user1");

    console.log("fetching user2 .....");
    let user2 = await p2
    console.log("fetched user2");
    return [user1,user2];
}

let a = name();
a.then((value) =>{
    console.log(value);
})
