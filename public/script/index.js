// window.alert("connected");


// $( document ).ready(function() {
// 	$(".homeHeadContainer2").toggle(1000);
// });

// $(".hideDiv").fadeIn(6000);

AOS.init({
 duration: 1200
});


$(".cardContent").hover(function(){
  $(this).css("background", "rgb(239,248,248)");
  $(this).css("box-shadow", "7px 7px rgb(151,208,208)");
  }, function(){
  $(this).css("box-shadow", "none");
  $(this).css("background", "white");
});


var timeout;
$(".imgNiresh").hover(
    function() {
        timeout = setTimeout(function(){
            // do stuff on hover
             $(".nireshtext").slideDown("slow",function(){
             	$(".nireshtext").css("display", "block");
				$(".nireshtext").css("width","500px");
				$(".nireshtext").css("margin","auto");
				$(".nireshtext").css("text-align","center");
             });
           
        }, 500);
    },
    function(){
        clearTimeout(timeout);
        // do stuff when hover off
        $(".nireshtext").slideUp("slow",function(){
        	$(".nireshtext").css("display","none");
        });

    }
);

$('.demo').ripples({

  // Image Url
  imageUrl: null,

  // The width and height of the WebGL texture to render to. 
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 256,

  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 5,

  // Basically the amount of refraction caused by a ripple. 
  // 0 means there is no refraction.
  perturbance: 0.04,

  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,

  // The crossOrigin attribute to use for the affected image. 
  crossOrigin: ''
  
});