// Before running this file connect it an an index. html file


// // event listener syntax :
// // <event_Target>.addEventListener(<event_Type> , <Function/ action>);

// // one way 
// function changeText(){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hii Nikita";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);


// // another way ( write function inside event listener)
// // but this is not right way to do
// // let fpara = document.getElementById('fpara');
// // fpara.addEventListener('click', function(){
// //     let fpara = document.getElementById('fpara');
// //     fpara.textContent = "Hii Nikita";
// // });

// // fpara.removeEventListener('click', changeText);
// // function passed should be exactly same 

// // fpara.removeEventListener('click',function(){
// //     let fpara = document.getElementById('fpara');
// //     fpara.textContent = "Hii Nikita";
// // } );
// // this will not work 


// let anchorElement = document.getElementById('fanchor');
// function aevent(){
//     event.preventDefault();   // it will remove the default behaviour of anchor tag
//     anchorElement.textContent = "click done";
// }
// anchorElement.addEventListener('click', aevent);




//-------------------------------------------------------------------------------------------------------------- 

// function display(){
//     alert("you have clicked on " + event.target.textContent );
// }
// let paras = document.querySelectorAll('p');
// for(let i=0; i < paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', display);
// }

// more optimal is to add listener to div only 

function display(){
    if(event.target.nodeName === 'SPAN'){ // oly work for span tag
    alert("you have clicked on " + event.target.textContent );
    }
    //here target is the element in which you click
}
let para = document.getElementById('wrapper');
para.addEventListener('click', display);

