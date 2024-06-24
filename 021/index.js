const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const scoreDisplay = document.getElementById('scoreDisplay');
const choicesDisplay = document.querySelector('.choices');
const resultDisplay = document.querySelector('.result');
const message = document.getElementById('message');
const playAgain = document.getElementById('playAgain');
const youPicked = document.querySelector('.you-picked');
const housePicked = document.querySelector('.house-picked');
const youPickedImg = document.getElementById('youPickedImg');
const housePickedImg = document.getElementById('housePickedImg')

const choices = ['rock', 'paper', 'scissors'];
const backgroundColor =[
    "linear-gradient(var(--rock-gradient))",
    "linear-gradient(var(--paper-gradient)",
    "linear-gradient(var(--scissors-gradient))",
]
const imgValue = [
    "assets/icon-rock.svg",
    "assets/icon-paper.svg",
    "assets/icon-scissors.svg",
]
let score = 0;

function gamePlay(e){
    let index = Math.floor(Math.random() * 3 )
    let computerChoice = choices[index];

    choicesDisplay.style.display = 'none';
    resultDisplay.style.display = 'flex';
    youPicked.style.background = backgroundColor[choices.indexOf(e)];
    housePicked.style.background = backgroundColor[index];
    youPickedImg.src = imgValue[choices.indexOf(e)];
    housePickedImg.src = imgValue[index];
    const resultData = result(e, computerChoice);
    message.innerText = resultData;
    scoreDisplay.innerText = score;

}

function result (userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'Draw !'
    }else if(
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        score++;
        return 'You Win !'
    }else{
        if(score > 0){
            score--;
        }
        return 'You Lose !'
    }

}

function playAgainBtn(){
    choicesDisplay.style.display = 'flex';
    resultDisplay.style.display = 'none';
}

paper.addEventListener('click', ()=>gamePlay('paper'));
rock.addEventListener('click', ()=>gamePlay('rock'));
scissors.addEventListener('click', ()=>gamePlay('scissors'));
playAgain.addEventListener('click', playAgainBtn)