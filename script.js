function c(cs) {
  return document.getElementsByClassName(cs).item(0);
}

function correct() {
  return (parseInt(c("left").textContent) + parseInt(c("right").textContent) == parseInt(c("result").value));
}

function nytStykke() {
  c("left").textContent = Math.floor(Math.random() * 10);
  c("right").textContent = Math.floor(Math.random() * 10);
  c("result").value = "";
}

function result() {
  if (correct()) {
    rigtige++;
    nytStykke();
  } else {
    forkerte++;
  }
  c("stats").textContent = rigtige + " rigtige, " + forkerte + " forkerte";
}

var rigtige = 0;
var forkerte = 0;

document.onreadystatechange = function(state) {
  c("result").onkeyup = function(event) {
    if (event.key == "Enter") {
      result();
    }
  }
}

