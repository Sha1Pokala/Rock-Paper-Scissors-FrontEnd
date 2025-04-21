let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")

const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const drawGame=()=>{

    msg.innerText="Game Draw"
    msg.style.backgroundColor="black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;

        msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const genCompChoice= () =>{
let options= ['rock','paper','scissors'];
const randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];
}
const playGame= (userChoice)=>{
    console.log("userChoice= ", userChoice);
//to Generate Computer Choice
const compChoice=genCompChoice();
console.log("comp choice= ",compChoice);
;

if(userChoice===compChoice){
//Draw
drawGame();
}
else
{
let userWin= true;

    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false:true;
        
    } 
    else if ( userChoice==="paper"){
        userWin=compChoice==="scissors"? false:true;

    } else{

        userWin=compChoice==="rock" ? false:true;}

        showWinner(userWin,userChoice,compChoice);

}};
choices.forEach((choice) => {
choice.addEventListener("click",() => {
    const userChoice= choice.getAttribute("id");
    // console.log("Choice Was Clicked",userChoice);
    playGame(userChoice);
});
});