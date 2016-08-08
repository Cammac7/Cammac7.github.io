//------------------------------------------------ TWITTER BIRD ----------------------------------------------------

 $(document).ready(function(){
    animateDiv();
    
});

var rectAbout = $("#aboutBox").offset();
var aboutTop = rectAbout.top;
var aboutBottom = aboutTop + document.getElementById('aboutBox').offsetHeight;

function makeNewPosition(){
    
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = (aboutBottom - aboutTop)-50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h)+aboutTop;
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
}); 
