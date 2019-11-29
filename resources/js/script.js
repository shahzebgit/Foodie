$(document).ready(function () {


    // Sticky nav bar
    $('.js--section-feature').waypoint(function (direction) {
            if (direction === 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
    },{  
            offset: '60px;'
    });


    // =Buttons to actual element 
    $('.js--scroll-plans').click(function(){

        $('html,body').animate({scrollTop:$('.js--plans').offset().top}
        ,1000);
    });
    $('.js--to-start').click(function(){

        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top}
        ,1200);
    });

    // Smooth Scroll
    $(function() { 
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });



      // Animation on Scroll

      $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
      },{
        offset:'40%'
      });
      $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInLeft');
      },{
        offset:'55%'
      });
      $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInRight');
      },{
        offset:'70%'
      });
      $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
      },{
        offset:'70%'
      });


      // Mobile Navigation
      $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        }else{
          icon.removeClass('ion-close-round');
          icon.addClass('ion-navicon-round');
        }

      });



     


});












