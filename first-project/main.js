//ランダム番号指定
//ユーザが番号入力それとgoというボタンを押す
//もしユーザがランダムの番号をあわしたら、あたりと表示する
//ランダム番号が<ユーザ番号Down
//ランダム番号＞ユーザ番号up
//Restボタンを押すとゲームがリセットされる。
//5回の機会を全て使うとゲームがおわる。（ボタンdisable）
//ユーザが1から100範囲以外の数字を入力すると教える機会を減らさない。
//ユーザがもう入力した数字を同じく入力すると教える機会を減らさない。
let computerNum =0;
function pickRandomNum(){
computerNum=Math.floor（Math.random()*100）;//Math.random()0から1の間の数字をランダムで表しますMath.floorを使うことで自然数になります。
console.log("정답",computerNum);
}
pickRandomNum();