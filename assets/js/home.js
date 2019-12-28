// wow.js
new WOW().init();
// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
// info tabs one
$('.owl-theme-info').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
// info tabs two
$('.owl-theme-info-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$( ".owl-prev").html('<button class="mdl-button mdl-js-button mdl-button--fab"><i class="material-icons">navigate_next</i></button>');
$( ".owl-next").html('<button class="mdl-button mdl-js-button mdl-button--fab"><i class="material-icons">navigate_before</i></button>');

$(function(){ // this replaces document.ready
    $(window).on("load", function(){
      $('#preloader').fadeOut('slow', function() {
        $(this).remove();
      });
    });
  });