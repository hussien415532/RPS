let gameContent = document.querySelector(".game-content");
let imgs = Array.from(document.querySelectorAll(".game-content img"));
let score = document.querySelector(".score-counter");
let count = 3;
let fisrtImg;
let randomImg;
gameContent.addEventListener("click", (e) => {
  if(e.target.hasAttribute("data-"))
  {
  gameContent.innerHTML = "";
  gameContent.style.backgroundImage = "none";
  gameContent.appendChild(e.target);
  let timer = document.createElement("div");
  timer.classList.add(
    "temp",
    "rounded-circle",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "fs-1",
    "text-white"
  );
  timer.innerHTML = count;
  gameContent.insertAdjacentElement("beforeend", timer);
  gameContent.style.pointerEvents = "none";
  let intr = setInterval(() => {
    timer.innerHTML--;
    if (timer.innerHTML == 0) {
      clearInterval(intr);
      randomImg = imgs[Math.floor(Math.random() * imgs.length)];
      timer.innerHTML = "";
      timer.appendChild(randomImg);
    }
    check();
  }, 1000);
   } });
function check() {
let me = document.querySelector(".game-content img:first-child");
let computer = document.querySelector(".game-content div:last-child img");
  if (me.getAttribute("data-") == "paper") {
    if (computer.getAttribute("data-") == "paper") {
      draw();
    } else if (computer.getAttribute("data-") == "scissors") {
      lose();
    } else {
      win();
    }
  } else if (me.getAttribute("data-") == "scissors") {
    if (computer.getAttribute("data-") == "scissors") {
      draw();
    } else if (computer.getAttribute("data-") == "rock") {
      lose();
    } else {
      win();
    }
  } else if (me.getAttribute("data-") == "rock") {
    if (computer.getAttribute("data-") == "rock") {
      draw();
    } else if (computer.getAttribute("data-") == "paper") {
      lose();
    } else {
      win();
    }
  }
}
function draw() {
  let d = `<div class="final d-flex justify-content-center align-items-center flex-column text-uppercase">
    <p class="text-white display-4">you tie</p>
    <p class="btn px-5 py-2 bg-light text-primary" onclick="reload()">play again</p>
  </div>`;
  gameContent.insertAdjacentHTML("afterend", d);
}
function win() {
  let w = `<div class="final d-flex justify-content-center align-items-center flex-column text-uppercase">
    <p class="text-white display-4">you win</p>
    <p class="btn px-5 py-2 bg-light text-success " onclick="reload()">play again</p>
  </div>`;
  gameContent.insertAdjacentHTML("afterend", w);
  score.textContent=Number(score.textContent) +1 ;
}
function lose() {
  let l = `<div class="final d-flex justify-content-center align-items-center flex-column text-uppercase">
    <p class="text-white display-4">you lose</p>
    <p class="btn px-5 py-2 bg-light text-danger " onclick="reload()">play again</p>
  </div>`;
  gameContent.insertAdjacentHTML("afterend", l);
}
function reload()
{
  gameContent.innerHTML=`<img
  src="images/icon-paper.svg"
  alt=""
  class="paper rounded-circle bg-light p-4"
  data-="paper"

/>
<img
  src="images/icon-scissors.svg"
  alt=""
  class="scissors rounded-circle bg-light p-4"
  data-="scissors"
/>
<img
  src="images/icon-rock.svg"
  alt=""
  class="rock rounded-circle bg-light p-4"
  data-="rock"
/>
`
gameContent.style.pointerEvents = "auto";
gameContent.style.backgroundImage='url("images/bg-triangle.svg")';
let final = document.querySelector('.final');
final.remove();
}
