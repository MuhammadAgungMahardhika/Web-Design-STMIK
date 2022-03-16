//membuat efek ketika image di hover 
$('#sstimik').hover(function(){
    $('#sstimik').css({
        'transform': 'translate(0px,'+wScrool/8+'%)'
    });
});


// perulangan
function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());

// navigasi

$(window).scroll(function() {
    var wScrool = $(this).scrollTop();

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }

    //parallax efex pada tulisan STIMIK Indonesia
    $('#stimik').css({
        'transform': 'translate(0px,'+wScrool/4+'%)'
    });

    $('#sstimik').css({
        'transform': 'translate(0px,'+wScrool/8+'%)'
    });

    
    
});

// Mobile navigasi
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

// Smooth Scrolling

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);