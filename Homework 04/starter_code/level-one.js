/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


function declareWinner() {
  document.body.classList.add('game-over');
}

function countScore (){
  score = score + 10;
  scoreEl.textContent = `00${score}`;
  console.log(score);

  if (score === 100){
    declareWinner();
  }

}

ballEl.addEventListener('click', countScore);

/* Pseudo code
 *
 * When ball is clicked, score goes up 10 points
 * When ball is clicked, new score is displayed
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */ 