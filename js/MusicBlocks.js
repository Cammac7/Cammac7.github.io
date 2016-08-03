$(document).ready(function() {
	$('#lroClick').on('click', function(){
        
        $('#lromp3').toggle();
        $('#jealousmp3').hide();
        $('#girlcrushmp3').hide();
        $('#bubblemp3').hide();
        $('#glassmp3').hide();
        
		$('#loverunsoutpdf').show();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').hide();
        $('#glassleft').hide();
        $('#bubbleleft').hide();
	});
    
    $('#jealousClick').on('click', function(){
        
        $('#jealousmp3').toggle();
        $('#lromp3').hide();
        $('#girlcrushmp3').hide();
        $('#bubblemp3').hide();
        $('#glassmp3').hide();
        
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').show();
        $('#girlcrushpdf').hide();
        $('#glassleft').hide();
        $('#bubbleleft').hide();
        
	});
    
    $('#girlcrushClick').on('click', function(){
        
        $('#jealousmp3').hide();
        $('#lromp3').hide();
        $('#girlcrushmp3').toggle();
        $('#bubblemp3').hide();
        $('#glassmp3').hide();
        
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').show();
        $('#glassleft').hide();
        $('#bubbleleft').hide();
	});
    
    $('#bubbleClick').on('click', function(){
        $('#jealousmp3').hide();
        $('#lromp3').hide();
        $('#girlcrushmp3').hide();
        $('#bubblemp3').toggle();
        $('#glassmp3').hide();
        
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').hide();
        $('#glassleft').hide();
        $('#bubbleleft').show();
	});
    
    $('#glassClick').on('click', function(){
        $('#jealousmp3').hide();
        $('#lromp3').hide();
        $('#girlcrushmp3').hide();
        $('#bubblemp3').hide();
        $('#glassmp3').toggle();
        
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').hide();
        $('#glassleft').show();
        $('#bubbleleft').hide();
	});
    
    $('.bigblock').click(function() {    
        $(this).parent().prepend($(this));
    });
    
    $('#closemusic').on('click', function(){
        $('audio').trigger('pause');
	});
    
    window.addEventListener("play", function(evt)
{
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
    {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true);
    
});

