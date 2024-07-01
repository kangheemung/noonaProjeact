//ランダム番号指定 ok
//ユーザが番号入力それとgoというボタンを押す ui 必要 ok
//もしユーザがランダムの番号をあわしたら、あたりと表示する ok
//ランダム番号が<ユーザ番号Down ok
//ランダム番号＞ユーザ番号up ok
//Restボタンを押すとゲームがリセットされる。ok
//5回の機会を全て使うとゲームがおわる。（ボタンdisable）
//ユーザが1から100範囲以外の数字を入力すると教える機会を減らさない。
//ユーザがもう入力した数字を同じく入力すると教える機会を減らさない。
let computerNum = 0;
let playButton = document.getElementById("playbutton");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset_button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chansarea");
let history = [];

//console.log(playButton);
playButton.addEventListener("click", play); //("click",function)
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; //Math.random()0から1の間(1が含まれてない)の数字をランダムで表しますMath.floorを使うことで自然数になります。
//console.log("正解", computerNum);
}

function play() {
  //user番号持ってくる値を持ってきます
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과100의 사이의 숫자를 입력해주세요!";
    return; //終了
  }
  //同じ数字入力防止
  if (history.includes(userValue)) {
    resultArea.textContent = "입력하신 숫자입니다.";
    return; //終了
  }
  if (chances < 1) {
    chanceArea.textContent = "gameover";
  }
  chances--;
  chanceArea.textContent = `남은 기회${chances} 번`;
//console.log("chance", chances);

  if (userValue < computerNum) {
//console.log("UP!!");
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
//console.log("down!!");
    resultArea.textContent = "down!!";
  } else {
//console.log("BingGo!!");
    resultArea.textContent = "정답!!";
    gameOver = true;
  }
  history.push(userValue);

//console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}
function reset() {
  //userinputで内容綺麗に消す
  userInput.value = "";
  //新しい番号生成
  pickRandomNum();

resultArea.textContent = "다시 스타트!!";
}

pickRandomNum();
document.addEventListener("DOMContentLoaded", function() {
  const starsContainer = document.querySelector(".stars");

  for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);

      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;

      starsContainer.appendChild(star);
  }
});
