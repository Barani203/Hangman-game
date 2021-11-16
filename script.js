var res = [
	"deal",
"encourage",
"catch",
"row",
"process",
"charge",
"people",
"mean",
"appreciate",
"desert",
"naveen",
	"ruby"
]
// word seloctin chance
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
// array words random part
function randomword(){
  answer = res[Math.floor(Math.random()*res.length)];

}
//keyboard part
function generateButtons(){
  let buttonHTML ='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class = "btn btn-lg btn-primary m-2"
        id ='` + letter +`'
        onClick="handleGuess('`+ letter +`')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonHTML;
  
}
// mistakes words checking function
function handleGuess(chosentLetter){
  guessed.indexOf(chosentLetter) === -1 ? guessed.push(chosentLetter):null;
  document.getElementById(chosentLetter).setAttribute('disabled',true);
  if (answer.indexOf(chosentLetter) >= 0){
    guessedWord();
    checkIfGameWon();
  }else if (answer.indexOf(chosentLetter) === -1){
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}
// The word worng then picture show in one by one
function updateHangmanPicture(){
  document.getElementById('hangmanpic').src = './images/' + mistakes +'.jpg';

}
function checkIfGameWon(){
  if (wordStatus === answer){
    document.getElementById('keyboard').innerHTML = 'You Won !!!';

  }
}

function checkIfGameLost(){
  if(mistakes === maxWrong){
    document.getElementById('wordspotlight').innerHTML = 'The answer was :' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost !!!';
  }
}

// words carsour point
function guessedWord(){
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordspotlight').innerHTML = wordStatus;
}

function updateMistakes(){
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset(){
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanpic').src = './images/0.jpg';
  
  randomword();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxwrong').innerHTML = maxWrong;

randomword();
generateButtons();
guessedWord();