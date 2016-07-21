$(document).ready(function() {
	$('#lroClick').on('click', function(){
        $('#lromp3').toggle();
        $('#jealousmp3').hide();
        $('#girlcrushmp3').hide();
		$('#loverunsoutpdf').show();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').hide();  
	});
    
    $('#jealousClick').on('click', function(){
        $('#jealousmp3').toggle();
        $('#lromp3').hide();
        $('#girlcrushmp3').hide();
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').show();
        $('#girlcrushpdf').hide();  
	});
    
    $('#girlcrushClick').on('click', function(){
        $('#jealousmp3').hide();
        $('#lromp3').hide();
        $('#girlcrushmp3').toggle();
		$('#loverunsoutpdf').hide();
        $('#jealouspdf').hide();
        $('#girlcrushpdf').show();  
	});
});