// let name = "xyz"
function outerFunc() {
    let name = "nikita";       
    function innerFunc() {
        // let name = "rani";
      console.log(name); 
    }
    return innerFunc;
  }
let inner = outerFunc();
inner();
  

// clouser with arguments
function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  