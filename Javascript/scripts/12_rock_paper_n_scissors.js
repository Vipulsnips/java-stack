let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
console.log(localStorage.getItem("score"));
// if(!score){
//   score={
//     wins:0,
//     losses:0,
//     ties:0
//   }
// }
function updatescore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` wins:${score.wins}, Ties:${score.ties}, Losses:${score.losses}`;
}
function pickMove() {
  let choice = "";
  const value = Math.random();
  if (value >= 0 && value < 1 / 3) choice = "Rock";
  else if (value < 2 / 3) choice = "Paper";
  else choice = "Scissors";
  return choice;
}
let isautoplay = false;
let intervalId;
function autoPlay() {
  if (!isautoplay) {
    intervalId = setInterval( ()=>  {
      const playermove = pickMove();
      resultEval(playermove);
    }, 2000);
    isautoplay = true;
  } else {
    clearInterval(intervalId);
    isautoplay = false;
  }
}
document.querySelector('.js-rock-btn')
  .addEventListener('click',()=>{
    resultEval('Rock');
  });
document.querySelector('.js-paper-btn')
  .addEventListener('click',()=>{
    resultEval('Paper');
  })
document.querySelector('.js-scissors-btn')
  .addEventListener('click',()=>{
    resultEval('Scissors');
  })

document.body.addEventListener('keydown',(event)=>{
  // console.log(event);
  if(event.key=== 'r') resultEval('Rock');
  else if(event.key=== 's') resultEval('Scissors');
  else if(event.key === 'p') resultEval('Paper');
}); 
function resultEval(playermove) {
  const choice = pickMove();
  let result = "";
  if (playermove === "Scissors") {
    if (choice === "Rock") result = "Lost";
    else if (choice === "Paper") result = "Win";
    else result = "Tie";
  } else if (playermove === "Paper") {
    if (choice === "Rock") result = "Win";
    else if (choice === "Paper") result = "Tie";
    else result = "Lost";
  } else {
    if (choice === "Rock") result = "Tie";
    else if (choice === "Paper") result = "Lost";
    else result = "Win";
  }
  if (result === "Win") score.wins++;
  else if (result === "Tie") score.ties++;
  else score.losses++;
  localStorage.setItem("score", JSON.stringify(score));
  updatescore();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-choice"
  ).innerHTML = `  you <img src="images/${playermove}-emoji.png" class="move-img"> <img src="images/${choice}-emoji.png" class="move-img">  computer`;
}

updatescore();
