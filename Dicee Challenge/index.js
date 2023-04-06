let randomNumber1 = Math.ceil(Math.random()*6);
let randomLink1 = `images/dice${randomNumber1}.png`;
// document.getElementsByClassName("img1").setAttribute("src", randomLink)
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomLink1)


let randomNumber2 = Math.ceil(Math.random()*6);
let randomLink2 = `images/dice${randomNumber2}.png`;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomLink2) 

const header = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  header.textContent = "🚩Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  header.textContent = "Player 2 Wins🚩";

}else {
  header.textContent = "Draw";

}
