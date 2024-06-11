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
//console.log(playButton);
playButton.addEventListener("click", play); //("click",function)
resetButton.addEventListener("click", reset);
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; //Math.random()0から1の間(1が含まれてない)の数字をランダムで表しますMath.floorを使うことで自然数になります。
  console.log("正解", computerNum);
}
function play() {
  //user番号持ってくる値を持ってきます
  let userValue = userInput.value;
  chances--;
  chanceArea.textContent = `残った機会${chances}回`;

  console.log("chance", chances);

  if (userValue < computerNum) {
    console.log("UP!!");
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
    console.log("down!!");
    resultArea.textContent = "down!!";
  } else {
    console.log("BingGo!!");
    resultArea.textContent = "BingGo!!";
    playButton.disabled = true;
  }
  if (chances <= 0) {
    alert("ゲームオーバー！ すべての機会を使いました。");
    playButton.disabled = true;
  }
}
function reset() {
  //userinputで内容綺麗に消す
  userInput.value = "";
  //新しい番号生成
  chances = 5;
  chanceArea.textContent = `残りの機会: ${chances} 回`;
  pickRandomNum();
  resultArea.textContent = "結果の値がここに表示されます。";
  playButton.disabled = false;
}

pickRandomNum();
