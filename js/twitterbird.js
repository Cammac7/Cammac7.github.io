//------------------------------------------------ TWITTER BIRD ----------------------------------------------------

/* $(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#tw').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    if (newq[1] < oldq.left) {
        var myElement = document.querySelector("#twitter-bird");
            myElement.style.backgroundImage = "url(media/twitter-bird-sprite-left.png)";
    }
    else {
        var myElement = document.querySelector("#twitter-bird");
            var myElement = document.querySelector("#twitter-bird");
            myElement.style.backgroundImage = "url(media/twitter-bird-sprite.png)";
    }
    $('#tw').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
$("#tw").hover(function(){
   $(this).stop(); //Stop the animation when mouse in
},
function(){
   animateDiv(); //Start the animation when mouse out
}); */
//--------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------SVG ------------------------------------------------------

var width = 940;
var height = 572;
 

var svg = d3.select(".mydiv").classed("svg-container",true).append("svg")
                             .attr("preserveAspectRatio", "xMinYMin meet")
                             .attr("viewBox", "0 0 250 250")
                             .classed("svg-content-responsive", true);

var defs= svg.append('defs')

 defs.append('pattern')
    .attr('id', 'pic1')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 75)
    .attr('patternTransform', "scale(2)")
    .append('svg:image')
    .attr('xlink:href', 'img/portfolio/tower.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);

  /*defs.append('pattern')
    .attr('id', 'pic2')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 100)
   .append('svg:image')
    .attr('xlink:href', 'img/portfolio/tower.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);*/

defs.append('pattern')
    .attr('id', 'pic3')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 100)
  .append('svg:image')
    .attr('xlink:href', 'img/portfolio/LRO.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);

defs.append('pattern')
    .attr('id', 'pic4')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 100)
   .append('svg:image')
    .attr('xlink:href', 'img/portfolio/mat.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);

defs.append('pattern')
    .attr('id', 'pic5')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 100)
    .append('svg:image')
    .attr('xlink:href','img/portfolio/logo.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);

defs.append('pattern')
    .attr('id', 'pic6')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 115.5)
    .attr('height', 100)
   .append('svg:image')
    .attr('xlink:href', 'img/portfolio/babyninjatest.png')
    .attr("width", 115.5)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);


svg.append("a")
    .attr('id','triblm')
    .attr("xlink:href", "#portfolioModal1")
    .append('path')
    .attr("d", "M 0,0, 57.7,-100,  183,-100, 125.5,0z")
    .attr("transform", "translate(0, 100)")
    .attr("fill", "url(#pic1)");

/*svg.append("a")
    .attr('id','tribub')
    .attr("xlink:href", "#portfolioModal2")
    .append('path')
    .attr("d", "M -109,-10, 57.7,-100, 80,-100, -109,100")
    .attr("transform", "translate(67.7, 100)")
    .attr("fill", "url(#pic2)");*/

svg.append("a")
    .attr('id','trilro')
    .attr("xlink:href", "#portfolioModal3")
    .append('path')
    .attr("d", "M 0,0, 57.7,-100, 115.5,0z")
    .attr("transform", "translate(135.5, 100)")
    .attr("fill", "url(#pic3)");

svg.append("a")
    .attr('id','trials')
    .attr("xlink:href", "#portfolioModal4")
    .append('path')
    .attr("d", "M 57.7,0, 0,-100, 115.5,-100z")
    .attr("transform", "translate(0, 210)")
    .attr("fill", "url(#pic4)");

svg.append("a")
    .attr('id','trikick')
    .attr("xlink:href", "#portfolioModal5")
    .append('path')
    .attr("d", "M 0,0, 57.7,-100, 115.5,0z")
    .attr("transform", "translate(67.7, 210)")
    .attr("fill", "url(#pic5)");

svg.append("a")
    .attr('id','trimar')
    .attr("xlink:href", "#portfolioModal6")
    .append('path')
    .attr("d", "M 57.7,0, 0,-100, 115.5,-100z")
    .attr("transform", "translate(135.5, 210)")
    .attr("fill", "url(#pic6)");

var  triangle1 = document.getElementById("triblm");
            triangle1.addEventListener('click', function(evt) {
                $('#portfolioModal1').modal('show');
            });

/*var  triangle2 = document.getElementById("tribub");
            triangle2.addEventListener('click', function(evt) {
                $('#portfolioModal2').modal('show');
            });*/

var  triangle3 = document.getElementById("trilro");
            triangle3.addEventListener('click', function(evt) {
                $('#portfolioModal3').modal('show');
            });
var  triangle4 = document.getElementById("trials");
            triangle4.addEventListener('click', function(evt) {
                $('#portfolioModal4').modal('show');
            });
var  triangle5 = document.getElementById("trikick");
            triangle5.addEventListener('click', function(evt) {
                $('#portfolioModal5').modal('show');
            });
var  triangle6 = document.getElementById("trimar");
            triangle6.addEventListener('click', function(evt) {
                $('#portfolioModal6').modal('show');
            });

//--------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------MUSIC BLOCKS ---------------------------------------------------
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
    
});
//--------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------- CANVAS -------------------------------------------------------