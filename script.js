//Player1
var random_number1=Math.floor(Math.random()*6)+1
var dice_player1='assets/dice'+random_number1+'.png'; 
document.querySelectorAll('img')[0].setAttribute('src',dice_player1);
//Player2
var random_number2=Math.floor(Math.random()*6)+1
var dice_player2='assets/dice'+random_number2+'.png'; 
document.querySelectorAll('img')[1].setAttribute('src',dice_player2);
//Result
if(random_number1>random_number2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(random_number1<random_number2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}