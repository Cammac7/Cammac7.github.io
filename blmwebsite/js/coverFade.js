$(window).scroll(function(){
    var sT = $(window).scrollTop(), wH = $(window).height();
    $('.picCover:not(.hide)').each(function(){
        var ths = $(this);
        var targetHeight = ths.outerHeight();
        var relativeToViewport = ths.offset().top - sT;
        var scrollPercent = 1 - (targetHeight - relativeToViewport) / targetHeight;
        if(scrollPercent >= 0){
            ths.css('opacity', scrollPercent);
        }
        if((relativeToViewport + ths.height()/2) < wH){
            ths.fadeOut(2000);
            ths.addClass('hide');
        }
    });
});