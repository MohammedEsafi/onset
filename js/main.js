/*
* ----------------------------------------------------------------------------------
Author       : Evenows
Template Name: Magic Ows - Portfolio Template
Version      : 1.0
* ----------------------------------------------------------------------------------
*/

/* =================================================================================
 * Get main-container style height
 * ================================================================================= */
(function () {
  var height_navbar_nav = $('nav').height(),
      height_navbar_nav_px = height_navbar_nav + 'px';
  console.log("This is my navigation bar height" + " " + height_navbar_nav_px);
  $('.main-container').css({
    height: 'calc(100vh - '+height_navbar_nav_px+')',
  });
})();
/* =================================================================================
 * Nice scroll
 * ================================================================================= */
(function nice_Scroll() {
  $("body,textarea").niceScroll({
      cursorborderradius: "1px",
      cursorborder: "none",
      cursorcolor: "rgba(101,114,140,0.4)", 
      autohidemode: "none",
      zindex: "10001",
      enableobserver: false,
  });
})();
$(window).resize(function () {
  $("body").getNiceScroll().resize();
});
$(".cucumber").hover(function () {
  $("body").getNiceScroll().resize();
});
$("button").on('click', function () {
  $("body").getNiceScroll().resize();
})
/* =================================================================================
 * Smooth Scrolling
 * ================================================================================= */
// Select all links with hashes
$('a[href*="#"]')
  	// Remove links that don't actually link to anything
  	.not('[href="#"]')
 	.not('[href="#0"]')
  	.click(function(event) {
	// On-page links
	if (
	  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	  && 
	  location.hostname == this.hostname
	) {
	  // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  // Does a scroll target exist?
	  if (target.length) {
	    // Only prevent default if animation is actually gonna happen
	    event.preventDefault();
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 1000, function() {
	      // Callback after animation
	      // Must change focus!
	      var $target = $(target);
	      $target.focus();
	      if ($target.is(":focus")) { // Checking if the target was focused
	        return false;
	      } else {
	        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	        $target.focus(); // Set focus again
	      };
	    });
	  }
	}
});
/* =================================================================================
 * Make the length of the elements (Buttons of main-container) equal
 * ================================================================================= */
$(document).ready(function () {
  var Width_button_one = $('.button-left').width(),
        Width_button_two = $('.button-right').width(),
        width_excessive_value = 10;
  if (Width_button_one > Width_button_two) {
      $('.button-right').width(Width_button_one + width_excessive_value);
      $('.button-left').width(Width_button_one + width_excessive_value);
  } else {
      $('.button-left').width(Width_button_two + width_excessive_value);
      $('.button-right').width(Width_button_two + width_excessive_value);
  }
});
/* =================================================================================
 * Effects on Click Button Watch video Introduction
 * ================================================================================= */
$(document).ready(function() {
  $("#w_video").on('click', function () {
      $(".v_modal").fadeIn(function () {
        $(".content_modal").animate({
            opacity: '1',
            width: '60%'
        },500)
      });
      $(".video_close").on('click', function () {
        $(".content_modal").animate({
            opacity: '0',
            width: '0'
        },300,function () {
          $('.v_modal').fadeOut();
        })
      })
  })
});
/* =================================================================================
 * Items | About our services | Hover on an element
 * ================================================================================= */
$(document).ready(function(){
      $(".about_our_services .option .cucumber").hover(function () {
          $(".about_our_services .option .cucumber").removeClass("active");
          $(this).addClass("active");
          var checked_value_item_service = $(this).attr('value');
          var checked_Id_info_item_service = '#tab'+''+checked_value_item_service+'';
          $('.item_info').removeClass('active');
          $(checked_Id_info_item_service).addClass('active');
      });
});
/* =================================================================================
 * Scrolling Effects Function
 * ================================================================================= */
try{(function($) {
	$(document).ready(function() {
	    $.fn.inView = function() {
	        if(!this.length)return false;
	        var rect = this.get(0).getBoundingClientRect();
	        return (rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth));
	    };
    // Skills percentage animation
		$(window).on('scroll',function(){
		if($('.skill_bar').inView()){
		        $('.progression[data-percentage]').each(function(){
		    $(this).find('.skill_percentage').animate({width:$(this).attr('data-percentage')},2500);
		  });
		}
		});
    // End animation
    // Count up number animation
    $(window).on('scroll',function(){
        if($('.fun_facts_container').inView()){
            $('.count_number').each(function() {
              var $this = $(this),
                  countTo = $this.attr('data-count');
              $({ countNum: $this.text()}).animate({
                countNum: countTo
              },
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }
            });  

          });
        }
    });
    // End animation
		});
	})(jQuery);
}
catch(e){console.error('Error in script declaration; Error:'+e.message);}
/* =================================================================================
 * The value Opacity in background color of items skills By Precentage
 * ================================================================================= */
$('.progression[data-percentage]').each(function(){
    $(this).find('.skill_percent').html($(this).attr('data-percentage'));
    var numberPercent = parseInt($(this).attr('data-percentage'), 10);
    var alpha = numberPercent / 100;
    $(this).find('.skill_percentage').css('opacity', alpha);
});
/* =================================================================================
 * Show and hide the link preview ( in section portfolio )
 * ================================================================================= */
$(document).ready(function(){
    $(".our_works .wrapper").mouseover(function () {
      $(this).removeClass('wrapper');
      $(this).addClass('casing');
    });
    $(".our_works .wrapper").mouseout(function () {
      $(this).removeClass('casing');
      $(this).addClass('wrapper');
    });
});
/* =================================================================================
 * Enable Scrollspy #Bootstrap
 * ================================================================================= */
$('body').scrollspy({ target: '#navbar_scrollspy' })
/* =================================================================================
 * Enable popovers everywhere #Bootstrap
 * ================================================================================= */
$('.element_demo > a').popover('show');
/* =================================================================================
 * Button ripple effect
 * ================================================================================= */
var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';
    console.log(this);
    circle.classList.add('ripple');
}
/* =================================================================================
 * Enable mixitup library
 * ================================================================================= */
var mixer = mixitup('#list_our_works');
/* =================================================================================
 * Select 'height of Horizontal Accordion Slider' and 'width of images that make up Slider'
 * ================================================================================= */
function resize_slider() {
  var slider_w = $('.Horizontal_accordion_slider').width(),
      windows_w = $(window).width(),
      h_item_lg_px = 80*slider_w/100 + 'px';
  $('.item_sl > img').width(h_item_lg_px);
  $('.Horizontal_accordion_slider').height(slider_w/2.9);
}
$(window).ready(resize_slider);
$(window).resize(resize_slider);
/* =================================================================================
 * Horizontal Accordion Slider Function Animation
 * ================================================================================= */
$(document).ready(function () {
  $('.item_sl').on('click', function () {
    $(this).animate({width:'80%'});
    $(this).siblings('.item_sl').animate({width:'5%'});
    $(this).find('.content_make_up_item').removeClass('make_up_mask');
    $(this).siblings('.item_sl').find('.content_make_up_item').addClass('make_up_mask');
  });
});
/* =================================================================================
 * Owl Carousel Setup
 * ================================================================================= */
$(document).ready(function(){
  $('.team_members .owl-carousel').owlCarousel({
      loop:true,
      dots:false,
      autoplay:true,
      autoplayHoverPause:true,
      margin:15,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          575:{
              items:2,
          },
          767:{
              items:3,
          },
          991:{
              items:4,
          },
          1199:{
              items:5,
          }
      }
  })
});
$(document).ready(function(){
  $('.our_blog .owl-carousel').owlCarousel({
      loop:true,
      dots:false,
      autoplay:true,
      margin:15,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          575:{
              items:2,
          },
          991:{
              items:3,
          }
      }
  })
});
$(document).ready(function(){
  $('.we_work_with .owl-carousel').owlCarousel({
      loop:true,
      dots:false,
      autoplay:true,
      margin:15,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
          },
          360:{
              items:3,
          },
          575:{
              items:4,
          },
          767:{
              items:5,
          },
          991:{
              items:6,
          }
      }
  })
});
$(document).ready(function () {
  $('.owl-carousel .owl-nav .owl-next').append('<i class="ows ows_0496"></i>');
  $('.owl-carousel .owl-nav .owl-prev').append('<i class="ows ows_0493"></i>');
});
/* =================================================================================
 * Determine the purpose of the contact us
 * ================================================================================= */
$(document).ready(function(){
  $(".control_check").on('click', function(){
    var checks = document.getElementsByClassName('control_check');
    var str = '';
    for (i = 0; i < checks.length; i++) {
      if ( checks[i].checked === true) {
        str += checks[i].value + ", ";
      }
    }
    $("#subject").val(str);
  });
});