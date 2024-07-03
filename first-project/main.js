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
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chansarea");
let history = [];
let correctAnswerDisplay;
//console.log(playButton);
playButton.addEventListener("click", play); //("click",function)
resetButton.addEventListener("click", reset);
userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      playButton.click(); // Simulate a click on the playButton
  }
});
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("正解:", computerNum);
  correctAnswerDisplay.textContent = `정답: ${computerNum}`; // Display correct answer in Korean
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


  chances--;
  chanceArea.textContent = `남은 기회${chances} 번`;
//console.log("chance", chances);
 // 既存のコードからchanceArea.textContent = "gameover";を追加します
 if (chances < 1) {
  chanceArea.textContent = "게임 오버";
  document.getElementById('chansarea').textContent = "게임 오버";
  document.getElementById('chansarea').style.color = "red";
  playButton.disabled = true; // Disable playButton when chances become 0
  return;
}

  if (userValue < computerNum) {
//console.log("UP!!");
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
//console.log("down!!");
    resultArea.textContent = "down!!";
  } else {
//console.log("BingGo!!");
    resultArea.textContent = "정답!!";
     playButton.disabled = true; 
  }
  history.push(userValue);

//console.log(history);


  if (gameOver == true) {
    playButton.disabled = true;
  }
  userInput.value = "";
}
function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "다시 시작!!";
  chances = 3;
  chanceArea.textContent = `남은 기회 ${chances} 번`;
  history = [];
  gameOver = false;
  playButton.disabled = false;
  correctAnswerDisplay.textContent = `정답: ${computerNum}`; // Update correct answer display
}



document.addEventListener("DOMContentLoaded", function() {
  correctAnswerDisplay = document.getElementById("jongdap");
  pickRandomNum(); // Move the call inside the DOMContentLoaded event listener
});




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
