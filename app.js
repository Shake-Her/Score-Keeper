const p1Button = document.querySelector('#Currp1');
const p2Button = document.querySelector('#Currp2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const selectUpto = document.querySelector('#upto');

//variables
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
//default value for game
let winnigScore = 5;

selectUpto.addEventListener('change' ,function () {
    winnigScore = parseInt(this.value);
    //reset function refernce
    reset();
})

p1Button.addEventListener('click',function (){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winnigScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click',function (){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winnigScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click' , reset)

function reset () {
    isGameOver = false;
    p1Score = p2Score = p1Display.textContent = p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}

