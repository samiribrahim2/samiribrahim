"use strict";

let random = Math.floor(Math.random() * 100) + 1;

let highscore = document.getElementById("highscore").innerText;
let score = 100;
document.getElementById("Check").addEventListener("click", () => {
  let num = Number(document.getElementById("inputbox").value);
  score--;
  console.log(random);
  console.log(num);
  if (num === random) {
    document.getElementById("banner").style.backgroundColor = "green";
    document.getElementById("Start").innerText = `Correct Number ! , ` + num;
    document.getElementById("Check").disabled = true;
    if (highscore < score) {
      highscore = score;
      document.getElementById("highscore").innerText = highscore;
    }

    setTimeout(() => {
      document.getElementById("banner").style.backgroundColor = "#ffffff";
    }, 100);
  } else {
    document.getElementById("banner").style.backgroundColor = "red";
    document.getElementById("score").innerText = "score:" + score;
    console.log(num / 10 - random / 10);
    if (num > 100 || num < 0) {
      document.getElementById("Start").innerHTML = "outside the range";

    }
    else{
      
      if (num / 10 - random / 10 >= 5 && num > random) {
        document.getElementById("Start").innerHTML =
          'Too low <i class="fa-solid fa-down-long"></i> ';
        console.log("1");
      } else if ((num / 10 - random / 10) * -1 >= 5 && num < random) {
        document.getElementById("Start").innerHTML =
          'Too high <i class="fa-solid fa-up-long"></i> ';
        console.log("2");
      } else if (
        num / 10 - random / 10 <= 5 &&
        num / 10 - random / 10 >= 1 &&
        num > random
      ) {
        document.getElementById("Start").innerHTML =
          'A little lower  <i class="fa-solid fa-down-long"></i> ';
        console.log("3");
      } else if (
        (num / 10 - random / 10) * -1 <= 5 &&
        (num / 10 - random / 10) * -1 >= 1 &&
        num < random
      ) {
        console.log("4");
        document.getElementById("Start").innerHTML =
          'A little higher <i class="fa-solid fa-up-long"></i>  ';
      } else if (num / 10 - random / 10 < 1 && num > random) {
        console.log("5");
        document.getElementById("Start").innerHTML =
          'you came very close <i class="fa-solid fa-down-long"></i> ';
      } else if ((num / 10 - random / 10) * -1 < 1 && num < random) {
        document.getElementById("Start").innerHTML =
          'you came very close <i class="fa-solid fa-up-long"></i>  ';
        console.log("6");
      } else {
        console.log("7");
        document.getElementById("Start").innerHTML = "outside the range";
      }
      setTimeout(() => {
        document.getElementById("banner").style.backgroundColor = "#ffffff";
      }, 100);
    }
  }
  document.getElementById("inputbox").value = "";
});
document.getElementById("Again").addEventListener("click", () => {
  score = 100;
  console.clear();
  document.getElementById("score").innerText = "score:" + score;
  document.getElementById("Start").innerHTML = "Start guessing...";
  random = Math.floor(Math.random() * 100) + 1;
  document.getElementById("Check").disabled = false;
});
