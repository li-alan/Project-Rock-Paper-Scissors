 //this is the computer's move
 function computerPlay(){
    let randomInt=Math.floor(Math.random()*3)+1;
    if(randomInt==3){
        return 'rock'
    }else if(randomInt==2){
        return 'paper'
    }else{
        return 'scissors'
    }

}

let cpuScore=0;
let playerScore=0;

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection=='rock'&&computerSelection=='scissors'){

        playerScore++;
    }else if(playerSelection=='paper'&&computerSelection=='rock'){
        playerScore++;
    }else if(playerSelection=='scissors'&&computerSelection=='paper'){
        playerScore++;
    }

    if(computerSelection=='rock'&playerSelection=='scissors'){
        cpuScore++;
    }else if(computerSelection=='paper'&&playerSelection=='rock'){
        cpuScore++;
    }else if(computerSelection=='scissors'&&playerSelection=='paper'){
        cpuScore++;
    }

}


const scoreboard=document.querySelector('#scoreboard');
//score text
const content=document.createElement('div');
content.textContent='YOU | CPU';
content.style.cssText='font-size:50px ;display: flex; justify-content:center; margin:200px 0px 50px';
scoreboard.appendChild(content);
//score counter
const counter=document.createElement('div');
counter.textContent=` ${playerScore} - ${cpuScore}`;
counter.style.cssText='font-size:50px ;display: flex; justify-content:center; margin:0px 0px 50px';
scoreboard.appendChild(counter);
const playMove=document.createElement('div')

const body=document.querySelector('body');
const result=document.createElement('div');
result.textContent='';
result.style.cssText='display: flex; justify-content:center; margin:20px';
body.append(result);




const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let cpuPlay=computerPlay();
        playRound(button.id,cpuPlay);
        counter.textContent=` ${playerScore} - ${cpuScore}`;
        result.textContent=`You chose ${button.id}. The CPU chose ${cpuPlay}`
        if(playerScore==5){
            alert('You win!');
            playerScore=0;
            cpuScore=0;
        }else if(cpuScore==5){
            alert('you lose!');
            playerScore=0;
            cpuScore=0;
        }
    });
});