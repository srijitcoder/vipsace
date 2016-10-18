$("document").ready(function(){
    $('.menu-button').on('click', function(){
        $('.menu').css("top","0%");
    });
    $('.close').on('click', function(){
        close_menu();
    });
});
var close_menu = function(){
    $('.menu').css("top","-110%");
}
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 20
        }, 300);
        return false;
      }
    }
  });
});
$(window).scroll(function(){
    var ws = $(this).scrollTop();
    if(ws >= 230){
        $('.menu-button').addClass('menu-button-bottom');
    }
    else{
        $('.menu-button').removeClass('menu-button-bottom');     
    }
});