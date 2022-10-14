/*
 * DOTS: Level Three
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
      let ballScore = e.target.getAttribute('data-increment');
      score += parseInt(ballScore);
      scoreEl.textContent = `00${score}`;

      console.log(score);
      console.log(ballScore);
    
      if (score >= 100){
        declareWinner();
      }

    }

  }
  arenaEl.addEventListener('click', countScore);

  // Pseudo code --------------------------

  // When the ball is clicked, add the corresponding score to the total
  //  - Target the parent container as the clickable area
  //  - Check if the area contains a ball
  //  - determine the ball value by the data-increment attribute
  //  - Turn the value into an integer
  //  - add integer to total score
  // when the score reaches 100, declare the winner
  // 
  