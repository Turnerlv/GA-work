/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');



function declareWinner() {
    document.body.classList.add('game-over');
  }
  
  function countScore (e){

    if (e.target.classList.contains('js-ball')){
    score = score + 10;
    scoreEl.textContent = `00${score}`;
    console.log(score);
  
    if (score === 100){
      declareWinner();
    }
    }
  }
  
  arenaEl.addEventListener('click', countScore);
  
  
  

