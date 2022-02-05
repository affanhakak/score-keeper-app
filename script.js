const btn1 =
  document.querySelector("#btn1");
const btn2 =
  document.querySelector("#btn2");
const btn3 =
  document.querySelector("#btn3");
const sp1 =
  document.querySelector("#sp1");
const sp2 =
  document.querySelector("#sp2");
const winningScoreSelect =
  document.querySelector("#selector");

let score1 = 0;
let score2 = 0;
let isGameOver = false;
let winningScore = 5;

btn1.addEventListener("click", () => {
  if (!isGameOver) {
    score1++;
    if (score1 === winningScore) {
      isGameOver = true;
    }
    sp1.innerText = score1;
  }
});

btn2.addEventListener("click", () => {
  if (!isGameOver) {
    score2++;
    if (score2 === winningScore) {
      isGameOver = true;
    }
    sp2.innerText = score2;
  }
});

winningScoreSelect.addEventListener(
  "change",
  (e) => {
    winningScore = parseInt(
      e.target.value
    );
    reset();
  }
);

btn3.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  sp1.innerText = 0;
  sp2.innerText = 0;
}
