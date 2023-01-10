var d1 = Math.ceil(Math.random()*6);
var d2 = Math.ceil(Math.random()*6);

var img1 = document.querySelector("#img-1");
var img2 = document.querySelector("#img-2");

if(d1 === 1){
    img1.setAttribute("src", "images/dice1.png");
} else if(d1 === 2){
    img1.setAttribute("src", "images/dice2.png");
} else if(d1 === 3){
    img1.setAttribute("src", "images/dice3.png");
} else if(d1 === 4){
    img1.setAttribute("src", "images/dice4.png");
} else if(d1 === 5){
    img1.setAttribute("src", "images/dice5.png");
} else{
    img1.setAttribute("src", "images/dice6.png");
}

if(d2 === 1){
    img2.setAttribute("src", "images/dice1.png");
} else if(d2 === 2){
    img2.setAttribute("src", "images/dice2.png");
} else if(d2 === 3){
    img2.setAttribute("src", "images/dice3.png");
} else if(d2 === 4){
    img2.setAttribute("src", "images/dice4.png");
} else if(d2 === 5){
    img2.setAttribute("src", "images/dice5.png");
} else{
    img2.setAttribute("src", "images/dice6.png");
}

if(d1 == d2){
    document.querySelector("h1").innerHTML="draw";
} else if(d1 > d2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}