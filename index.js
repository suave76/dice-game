document.querySelector("button").addEventListener("click",function(){
    // for 1st dice

var randomNumber1=Math.floor(Math.random()*6)+1;
var dice1Source="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",dice1Source);

// for 2nd dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var dice2Source="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",dice2Source);

// winner declare

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 Wins 🚩";
}
else{
    document.querySelector("h1").textContent="🚩 Draw 🚩";
}
})

