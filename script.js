var i = 0;
var txt = 'Innovation starts here'; /* The text */
var speed = 170; /* The speed/duration of the effect in milliseconds */
let display = true

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".slogan").innerHTML = document.querySelector(".slogan").innerHTML.replace("▮", "");
    document.querySelector(".slogan").innerHTML += txt.charAt(i) + "▮";
    setTimeout(typeWriter, speed);
    i++;
  }
  else{
    if(display == true){
        document.querySelector(".slogan").innerHTML = document.querySelector(".slogan").innerHTML.replace("▮", "");
        setTimeout(typeWriter, 600);
        display = false;
    }
    else if(display == false){
        document.querySelector(".slogan").innerHTML += "▮";
        setTimeout(typeWriter, 600);
        display = true;
    }
  }
}
addEventListener(onload, typeWriter());