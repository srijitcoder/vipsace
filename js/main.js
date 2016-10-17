$("document").ready(function(){
    $('.menu-button').on('click', function(){
        $('.menu').css("top","0%");
    });
    $('.close').on('click', function(){
        $('.menu').css("top","-100%");
    });
});