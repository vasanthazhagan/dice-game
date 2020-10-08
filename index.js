var num1 = Math.floor(Math.random() * 6 ) + 1;
var num2 = Math.floor(Math.random() * 6 ) + 1;
var i1 =  'images/dice'+num1+'.png';
var i2 =  'images/dice'+num2+'.png';
var name1 = prompt("Enter first player name: ");
var name2 = prompt("Enter second player name: ");
document.querySelector("p.player1").innerHTML = name1 ;
document.querySelector("p.player2").innerHTML = name2 ;
document.querySelector("img.img1").setAttribute("src",i1);
document.querySelector("img.img2").setAttribute("src",i2);
if (num1 > num2){
  document.querySelector("h1").innerHTML = name1 + ' wins !!!';
}
else if (num1 < num2){
  document.querySelector("h1").innerHTML = name2 + ' wins !!!';
}
else{
  document.querySelector("h1").innerHTML = "💖 Tie !!! 💖";
}
