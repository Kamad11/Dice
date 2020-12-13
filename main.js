var player1 = prompt("Enter name for player1: ");
document.getElementsByTagName("p")[0].innerHTML = player1;

var player2 = prompt("Enter name for player2: ");
document.getElementsByTagName("p")[1].innerHTML = player2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
image_source1 = "images\\dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", image_source1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
image_source2 = "images\\dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", image_source2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = player1+" Wins! 🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = player2 + " Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
