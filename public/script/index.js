// window.alert("connected");


// $( document ).ready(function() {
// 	$(".homeHeadContainer2").toggle(1000);
// });

// $(".hideDiv").fadeIn(6000);

AOS.init({
 duration: 1200
});

$(document).ready(function () {

    // Navbar collapse on scroll below 100px
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#main-nav");
        if ($(this).scrollTop() >= 100) {
            navbar.removeClass("navbar-expand");
        } else if ($(this).scrollTop() < 100) {
            navbar.addClass("navbar-expand");
        }
    }
});

$(".cardContent").hover(function(){
  $(this).css("background", "rgb(239,248,248)");
  $(this).css("box-shadow", "7px 7px #3cadac");
  }, function(){
  $(this).css("box-shadow", "none");
  $(this).css("background", "#ffffff");
  $(this).css("background-image","linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)");

//   background-color: #ffffff;
// background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
});


// var timeout;
// $(".imgNiresh").hover(
//     function() {
//         timeout = setTimeout(function(){
//             // do stuff on hover
//              $(".nireshtext").slideDown("slow",function(){
//              	$(".nireshtext").css("display", "block");
// 				$(".nireshtext").css("width","500px");
// 				$(".nireshtext").css("margin","auto");
// 				$(".nireshtext").css("text-align","center");
//              });
           
//         }, 500);
//     },
//     function(){
//         clearTimeout(timeout);
//         // do stuff when hover off
//         $(".nireshtext").slideUp("slow",function(){
//         	$(".nireshtext").css("display","none");
//         });

//     }
// );

$('.demo').ripples({

  // Image Url
  imageUrl: null,

  // The width and height of the WebGL texture to render to. 
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 400,

  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 4,

  // Basically the amount of refraction caused by a ripple. 
  // 0 means there is no refraction.
  perturbance: 0.04,

  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,

  // The crossOrigin attribute to use for the affected image. 
  crossOrigin: ''
  
});
