let img = document.getElementById('img');
let input = document.getElementById('input');

function logEvent(event) {
    console.log(event.type);
  }
input.addEventListener("keyup", logEvent);
input.addEventListener("keydown", logEvent);

function image(){
    let img = document.getElementById('img');
    console.log("scrolled")
    img.setAttribute('style',"height:200px ; weight : 200px");
}

window.addEventListener("scroll" ,image );
