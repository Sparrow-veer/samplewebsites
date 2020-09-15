// buttonsounds


  document.addEventListener("keydown",function() {
    //var text=(String.fromCharCode(event.keyCode)).toLowerCase();
    var text=event.key;
    makesound(text);
    highlightbutton(text);
  }
);

// click sounds
 for(var i=0;i<document.querySelectorAll("button").length;i++)
 {
 document.querySelectorAll("button")[i].addEventListener("click",function() {
  // document.addEventListener("click",function() {
    var innertest=this.innerHTML;

  makesound(innertest);
  highlightbutton(innertest);

});
}



function makesound(tests)
{
  switch (tests) {
    case "w":
        var crash=new Audio('crash.mp3');
        crash.play();
        break;
    case "a":
            var kick=new Audio('kick-bass.mp3');
            kick.play();
            break;
    case "s":
                var snare=new Audio('snare.mp3');
                snare.play();
                break;
    case "d":
                    var tom1=new Audio('tom-1.mp3');
                    tom1.play();
                    break;
    case "j":
                        var tom2=new Audio('tom-2.mp3');
                        tom2.play();
                        break;
    case "k":
                            var tom3=new Audio('tom-3.mp3');
                            tom3.play();
                            break;
    case "l":
                                var tom4=new Audio('tom-4.mp3');
                                tom4.play();
                                break;
    default:

  }

}


function highlightbutton(data)
{
  document.querySelector("."+data).classList.add("pressed");

  setTimeout(function(){document.querySelector("."+data).classList.remove("pressed");},100);
}
