// $(document).ready(function() {




    $(window).scroll(function(){
var wScroll = $(this).scrollTop();
    $('.about-me').css({
        'transform' : 'translate(opx, '+ wScroll /2 +'%)'
    });

    });
// });