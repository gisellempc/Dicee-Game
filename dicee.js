function getRandomImg(){
    var n = Math.random();
    var randomNumber = Math.ceil(n * 6);
    return randomNumber;

}

function diceeImage(image){
    var randomImage = getRandomImg();


    if (randomImage === 1) document.querySelector(image).src = "images/dice1.png";
    else if (randomImage === 2) document.querySelector(image).src = "images/dice2.png";   
    else if (randomImage === 3) document.querySelector(image).src = "images/dice3.png";
    else if (randomImage === 4) document.querySelector(image).src = "images/dice4.png";
    else if (randomImage === 5) document.querySelector(image).src = "images/dice5.png";
    else if (randomImage === 6) document.querySelector(image).src = "images/dice6.png";

    return randomImage;
}

function theWinnerIs(){
    var leftSide = diceeImage(".img1");
    var rightSide = diceeImage(".img2");

    if (leftSide === rightSide) document.querySelector("h1").innerHTML = "Draw!";
    else if (leftSide > rightSide) document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    else document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

theWinnerIs();

document.querySelector("button").onclick = theWinnerIs;