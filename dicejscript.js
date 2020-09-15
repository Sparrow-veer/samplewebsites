// document.getElementsByTagName("img")[0].setAttribute("src","dice4.png")


function roll()
{
  var img=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
  var num1=Math.random();
  var num2=Math.random();

  num1=Math.floor(num1*6)+1;
  num2=Math.floor(num2*6)+1;
  // alert(num1+" "+num2);
  if(num1===num2)
  {
   document.getElementsByTagName("h1")[0].innerHTML="🏳️ Draw 🏳️";
  }
  else if(num1>num2)
  {
     document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 won";
  }
  else {
   document.getElementsByTagName("h1")[0].innerHTML="Player 2 won 🚩";
  }
  document.getElementsByTagName("img")[0].src=img[num1-1];
  document.getElementsByTagName("img")[1].src=img[num2-1];
}
