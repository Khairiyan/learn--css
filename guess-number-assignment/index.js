/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here

let newGameBtn = document.getElementsByClassName("btn-warning")[0].addEventListener("click", resetGame);
let randomNumber = Math.floor(Math.random() * 10 + 1);
let message = document.getElementsByClassName("message")[0];
let displayScore = document.getElementsByClassName("score")[0];
let input = document.getElementsByClassName("input")[0];
let checkBtn = document.getElementsByClassName("btn-primary")[0].addEventListener("click", checkNumber);
let score = document.getElementsByClassName("number")[0];
let nowScore = 10;
function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  message.innerHTML = "Lets start guessing...";
  score.innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 10 + 1);
  displayScore.innerHTML = 10;
  input.value = " ";
  //dilarang menghapus code dibawah ini!
  document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
  let value = parseInt(input.value);
  if (nowScore === 0) {
    displayMessage("Oops, you lost the game");
  } else if (value <= 0 || value > 10) {
    displayMessage("Guess any number between 1 and 10");
    nowScore--;
    displayScore.innerHTML = nowScore;
  } else if (value > randomNumber) {
    displayMessage("Oww... that's too big!");
    nowScore -= 1;
    displayScore.innerHTML = nowScore;
  } else if (value < randomNumber) {
    displayMessage("Too small, buddy!");
    nowScore -= 1;
    displayScore.innerHTML = nowScore;
  } else if (value === randomNumber) {
    displayMessage("Yeay! you guessed it!");
    score.innerHTML = randomNumber;
  }
  // TODO: answer here
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;
