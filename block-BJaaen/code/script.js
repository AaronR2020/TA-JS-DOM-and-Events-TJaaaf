function main(){
    //scored1 and played1
scored1=document.querySelector(".score1")
player1=document.querySelector(".player1")
//scored12 and played2
scored2=document.querySelector(".score2")
player2=document.querySelector(".player2")
//result1 and result2
resultDisplay=document.querySelector(".resultDisplay")
var result1=0;//human
var result2=0;//computer
var playerSelected=" ";
var computerSelected="";
//add custom tags to all rock as R; paper as P; and scissors as S;
document.querySelectorAll(".fa-hand-rock-o")[0].setAttribute("data-val","rock1");
document.querySelectorAll(".fa-hand-rock-o")[1].setAttribute("data-val","rock2");

document.querySelectorAll(".fa-hand-paper-o")[0].setAttribute("data-val","paper1");
document.querySelectorAll(".fa-hand-paper-o")[1].setAttribute("data-val","paper2");

document.querySelectorAll(".fa-hand-scissors-o")[0].setAttribute("data-val","scissor1");
document.querySelectorAll(".fa-hand-scissors-o")[1].setAttribute("data-val","scissor2");

//add event listners to player1 and player2 as e.target.userDefined tag
function selectVal(e){
 try{
    if(e.target.attributes[2].value=="rock1"||e.target.attributes[2].value=="paper1"||e.target.attributes[2].value=="scissor1"){
        playerSelected=e.target.attributes[2].value;
        computerTurn();
        compare()
        return playerSelected; 
    }
    else{
        alert("click on one of the blue symbols to play the game");
    }
 }
 catch(error){
     if(e.target.classList[1]=="fa-refresh"){
        reset()
    } 
    else{
        alert("click on one of the blue symbols to play the game");
    }
 }
}

function computerTurn(){
    val=Math.floor(Math.random() * 3)
    computerSelected=Array.from(player2.lastElementChild.children)[val].attributes[2].value;
}
function compare(){
switch(playerSelected) {
    case "rock1":
      if(computerSelected=="rock2"){draw()}
      else if(computerSelected=="paper2"){computerWin()}
      else if(computerSelected=="scissor2"){humanWin()}
      break;
      case "paper1":
        if(computerSelected=="rock2"){humanWin()}
        else if(computerSelected=="paper2"){draw()}
        else if(computerSelected=="scissor2"){computerWin();}
      break;
      case "scissor1":
        if(computerSelected=="rock2"){computerWin();}
        else if(computerSelected=="paper2"){humanWin()}
        else if(computerSelected=="scissor2"){draw()}
      break;

  }
}
function reset(){
    result1=0;
    scored1.innerText=result1;
    result2=0; 
    scored2.innerText=result2;
    document.querySelector(".played1").innerHTML=" ";
    document.querySelector(".played2").innerHTML=" ";
}
function draw(){
    resultDisplay.innerText="Draw";
}
function computerWin(){
    result2+=1;
    scored2.innerText=result2;
    document.querySelector(".played1").innerHTML="- "+playerSelected.slice(0,playerSelected.length-1) ;
    document.querySelector(".played2").innerHTML="- "+computerSelected.slice(0,computerSelected.length-1); 
    resultDisplay.innerText="Computer Wins";
}
function humanWin(){
    result1+=1;
    scored1.innerText=result1;
    document.querySelector(".played1").innerHTML="- "+playerSelected.slice(0,playerSelected.length-1) ;
    document.querySelector(".played2").innerHTML="- "+computerSelected.slice(0,computerSelected.length-1);
    resultDisplay.innerText="You Win";

}

document.addEventListener("click",selectVal)
}

main()