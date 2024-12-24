var i = 0;
let y = 0;
let x = 0;
var txt = ['Innovation starts here', 'web developpement']; /* The text */
let z = txt[0].length;
var speed = 170; /* The speed/duration of the effect in milliseconds */
let display = true
let loop = 0;
let iterationTime = 10,

function typeWriter() {
  switch(loop){
    case 0 :
      write(txt[0], iterationTime);
    break;
    case 1 :
      deleteText(txt[0], 5);
    break;
    case 2:
      write(txt[1], iterationTime);
    break;
    case 3:
      deleteText(txt[1], 5);
    break;
  }
}
function write(text, iteration){
  if(y < text.length + iteration){
    if (i < text.length) {
      document.querySelector(".slogan").innerHTML = document.querySelector(".slogan").innerHTML.replace("▮", "");
      document.querySelector(".slogan").innerHTML += text.charAt(i) + "▮";
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
    y++;
  }
  if(y == text.length + iteration){
    display = true;
    loop++;
    x =0;
  }
}
function deleteText(text, deleteIteration){
  y = 0;
  i = 0;
  if(x < text.length + deleteIteration){
    if (z != 0) {
      document.querySelector(".slogan").innerHTML = document.querySelector(".slogan").innerHTML.replace(text[z-1]+"▮", "");
      document.querySelector(".slogan").innerHTML += "▮";
      setTimeout(typeWriter, speed);
      z--;
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
    x++;
  }
  if(x == text.length + deleteIteration && loop !=3){
    display = true;
    loop++;
    z = txt[1].length;
  }
  else if(x == text.length + deleteIteration && loop ==3){
    display = true;
    loop = 0;
    z = txt[0].length;
  }
}
addEventListener(onload, typeWriter());
