// document.querySelector(".small").addEventListener("click",function(){$(".Togglenavbar").toggle()})
// Toggle initial nav bar on clicking X symbol
function Togglenavbar()
{
  $(".Togglenavbar").toggle();
  document.querySelector(".secondnavbar").style.paddingTop="10px";
  // document.querySelector(".fixed-top-2").style.paddingTop="10px";

}


// $(document).scroll(function() {
//
//     $( ".col1" ).addClass("delayimg1");
//
//
//   // $( ".col2" ).addClass("delayimg2");
//   // setTimeout(function(){ $( ".col1" ).removeClass("delayimg1"); }, 3000);
// });


$(window).scroll(function() {
   var hT = $("#delayimg").offset().top,
       hH = $("#delayimg").outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $( ".col1" ).addClass("delayimg1");
   }
});

$(window).scroll(function() {
   var hT = $(".edata").offset().top,
       hH = $(".edata").outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $( ".equote" ).addClass("einsteineffect");
   }
});

$(window).scroll(function() {
   var hT = $(".epic").offset().top,
       hH = $(".epic").outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $( ".epicture" ).addClass("einsteineffect2");
   }
});
