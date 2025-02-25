// let num = prompt("Enter initial value")
let value = document.getElementById('value');
const minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');

// value.innerText = num;
let num=0;
value.innerText = num;

minus.addEventListener('click', function(){
    if(num>0){
        value.innerText = --num;
    }
});

plus.addEventListener('click', function(){
        value.innerText = ++num;

});

reset.addEventListener('click', function(){
    num = 0;
    value.innerText = num
});


