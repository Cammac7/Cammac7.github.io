function Banner() {
	
    var keyword = "Interaction";
    var keyword2 = "Designer";
    var canvas;
	var context;
	
	var bgCanvas;
	var bgContext;
	
	var denseness = 10;
    
    //Bool to check if a resize has occured
    //var resized = false;
	
	//Each particle/icon
	var parts = [];
    var coords =[];
	
	var mouse = {x:-100,y:-100};
	var mouseOnScreen = false;
	
	//var itercount = 0;
	var itertot = 40;
    
    var cwidth = $(document).width();
    var cheight = $(document).height();

    var rect = svgtightbox.getBoundingClientRect();

    //Get dynamic x/y locations of resume
    var resumeTop = resumeImage.getBoundingClientRect().top + window.pageYOffset - resumeImage.ownerDocument.documentElement.clientTop -5;
    var resumeLeft = resumeImage.getBoundingClientRect().left + window.pageXOffset - resumeImage.ownerDocument.documentElement.clientLeft - 8.5;
    var resumeRight = resumeLeft + document.getElementById('resumeImage').offsetWidth+14.5;
    var resumeBottom = resumeTop + document.getElementById('resumeImage').offsetHeight+14;
    var resumeButtonRight = ((resumeLeft+resumeRight)/2)+125;

    //Get dynamic x/y locations of svgs
    var topsvgs = rect.top + window.pageYOffset - svgtightbox.ownerDocument.documentElement.clientTop;
    var bottomsvgs = topsvgs+rect.height;
    var centersvgdivx = (rect.left + rect.right)/2;
    var centersvgdivy = (topsvgs + bottomsvgs)/2;
    var svgboxwidth = rect.width;

    var svghalf = trione.getBoundingClientRect().top + window.pageYOffset - trione.ownerDocument.documentElement.clientTop;



    //Area of About div for random dot background
    var aboutTop = about.getBoundingClientRect().top + window.pageYOffset - about.ownerDocument.documentElement.clientTop;

    //Get dynamic x/y locations of resume
    var hollerTop = hollerButton.getBoundingClientRect().top + window.pageYOffset - hollerButton.ownerDocument.documentElement.clientTop -5;
    var hollerLeft = hollerButton.getBoundingClientRect().left + window.pageXOffset - resumeImage.ownerDocument.documentElement.clientLeft - 8.5;
    var hollerRight = hollerLeft + document.getElementById('hollerButton').offsetWidth+16;
    var hollerBottom = hollerTop + document.getElementById('hollerButton').offsetHeight+14;
    var hollerMidy = (hollerBottom+hollerTop)/2;
    
    
	this.initialize = function(canvas_id){
		canvas = document.getElementById(canvas_id);
		context = canvas.getContext('2d');
		
		canvas.width = cwidth;
		canvas.height = cheight;
		
		bgCanvas = document.createElement('canvas');
		bgContext = bgCanvas.getContext('2d');
		
		bgCanvas.width = cwidth;
		bgCanvas.height = cheight;
        
		canvas.addEventListener('mousemove', MouseMove, false);
		canvas.addEventListener('mouseout', MouseOut, false);
        
        $(window).bind('resize', function(e){
            window.resizeEvt;
            $(window).resize(function(){
                clearTimeout(window.resizeEvt);
                window.resizeEvt = setTimeout(function(){
                    resizeCanvas();
                }, 250);
            });
        });
        
		start();
        setInterval( update, 40 );
	}
	
	var start = function(){
		bgContext.fillStyle = "#333";
        bgContext.fontWeight = "300";
		bgContext.font = '167px Arial';
        
        bgContext.fillText(keyword, 53, 410);
        bgContext.fillText(keyword2, 55, 550);
        
        
		drawPaths();
                
        /*
        //Fun Circles in about section
        for(d=0; d < 10; d++){
            bgContext.beginPath();
            //bgContext.fillRect(Math.random() * document.getElementById('about').offsetWidth,(Math.random() * document.getElementById('about').offsetHeight)+aboutTop,20,20);
            bgContext.arc(Math.random() * document.getElementById('about').offsetWidth, (Math.random() * document.getElementById('about').offsetHeight)+aboutTop, 50, 0, 2 * Math.PI);
            bgContext.fill();
            bgContext.stroke();
        }*/
        
		clear();	
		getCoords();
        
        for (var i = 0; i < coords.length; i++){
            drawCircle(coords[i].x,coords[i].y);
        }
	}
	
	var getCoords = function(){
		var imageData, pixel, height, width;
		
		imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);
		
		// quickly iterate over all pixels - leaving density gaps
	    for(height = 0; height < bgCanvas.height; height += denseness){
            for(width = 0; width < bgCanvas.width; width += denseness){   
               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
                  //Pixel is black from being drawn on. 
                  if(pixel == 255) {
                    //drawCircle(width, height);
                    coords.push(
                        {
                         x: width, //goal position   0xaaaaaa 0x111111
                         y: height
                        }
                    )
                  }
            }
        }
        
        //setInterval( update, 40 );
	}
	
	var drawCircle = function(x, y){
		
		var startx = (Math.random() * canvas.width);
		var starty = (Math.random() * canvas.height);
        
        var itercount = 0;
        
		var velx = (x - startx) / itertot;
		var vely = (y - starty) / itertot;	
        var mycolors = ['#6D18B2', '#23CE6B', '#0000E5','#FF1053', '#FFA400'];
		
		parts.push(
			{
             //c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
             c: mycolors[Math.floor(Math.random() * mycolors.length)],
			 x: x, //goal position   0xaaaaaa 0x111111
			 y: y,
			 x2: startx, //start position
			 y2: starty,
			 r: true, //Released (to fly free!)
			 v:{x:velx , y: vely},
             i: itercount, //count
             o: false //particle is off screen
			}
		)
	}
		
	var update = function(){
		var i, dx, dy, sqrDist, scale;
		//itercount++;
		clear();
        //context.fillStyle = "#000000";
        //context.fillText(keyword, 85, 275);
        //fitTextOnCanvas("context", keyword, "Quicksand", 85, 275);
		for (i = 0; i < parts.length; i++){
            parts[i].i++;
			//If the dot has been released
			if (parts[i].r == true){
				//Fly into infinity!!
				parts[i].x2 += parts[i].v.x;
		        parts[i].y2 += parts[i].v.y;
			//Perhaps I should check if they are out of screen... and kill them?
			}
                
			if (parts[i].i == itertot){
				parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 6};
				parts[i].r = false;
			}
            
            
	       //Redraw new circle for position if old circle has left canvas
            //Collapses page if you do window.width instead of doc. Problem.
            if ((parts[i].x2 > $(document).width()) || (parts[i].x2 < 0) || (parts[i].y2 > $(document).height()) || (parts[i].x2 < 0)){
                
                if(parts[i].o == false){
                    //figure out how to REPLACE circle instead of adding new one (save memory)
                    drawCircle(parts[i].x, parts[i].y);
                    parts[i].o = true;
                }
                
            }
            
            
			//Look into using svg, so there is no mouse tracking.
			//Find distance from mouse/draw!
			dx = parts[i].x - mouse.x;
	        dy = parts[i].y - mouse.y;
	        sqrDist =  Math.sqrt(dx*dx + dy*dy);
			
			if (sqrDist < 20){
				parts[i].r = true;
			} 			

			//Draw the circle
			context.fillStyle = parts[i].c;
			context.beginPath();
			context.arc(parts[i].x2, parts[i].y2, 4 ,0 , Math.PI*2, true);
			context.closePath();
	    	context.fill();	
				
		}	
	}
	
    var dynamicPathValues = function(){
        cwidth = $(document).width();
        cheight = $(document).height();

        rect = svgtightbox.getBoundingClientRect();

        //Get dynamic x/y locations of resume
        resumeTop = resumeImage.getBoundingClientRect().top + window.pageYOffset - resumeImage.ownerDocument.documentElement.clientTop -5;
        resumeLeft = resumeImage.getBoundingClientRect().left + window.pageXOffset - resumeImage.ownerDocument.documentElement.clientLeft - 8.5;
        resumeRight = resumeLeft + document.getElementById('resumeImage').offsetWidth+14.5;
        resumeBottom = resumeTop + document.getElementById('resumeImage').offsetHeight+14;
        resumeButtonRight = ((resumeLeft+resumeRight)/2)+125;

        //Get dynamic x/y locations of svgs
        topsvgs = rect.top + window.pageYOffset - svgtightbox.ownerDocument.documentElement.clientTop;
        bottomsvgs = topsvgs+rect.height;
        centersvgdivx = (rect.left + rect.right)/2;
        centersvgdivy = (topsvgs + bottomsvgs)/2;
        svgboxwidth = rect.width;

        svghalf = trione.getBoundingClientRect().top + window.pageYOffset - trione.ownerDocument.documentElement.clientTop;



        //Area of About div for random dot background
        aboutTop = about.getBoundingClientRect().top + window.pageYOffset - about.ownerDocument.documentElement.clientTop;

        //Get dynamic x/y locations of resume
        hollerTop = hollerButton.getBoundingClientRect().top + window.pageYOffset - hollerButton.ownerDocument.documentElement.clientTop -5;
        hollerLeft = hollerButton.getBoundingClientRect().left + window.pageXOffset - resumeImage.ownerDocument.documentElement.clientLeft - 8.5;
        hollerRight = hollerLeft + document.getElementById('hollerButton').offsetWidth+16;
        hollerBottom = hollerTop + document.getElementById('hollerButton').offsetHeight+14;
        hollerMidy = (hollerBottom+hollerTop)/2;
    }
    
	var MouseMove = function(e) {
	    if (e.layerX || e.layerX == 0) {
	    	//Reset particle positions
	    	mouseOnScreen = true;
	    	
                //use offsetX instead of layerX for Firefox
                //why was that working for Chrome?
	        mouse.x = e.offsetX - canvas.offsetLeft;
	        mouse.y = e.offsetY - canvas.offsetTop;
	    }
	}
	
	var MouseOut = function(e) {
		mouseOnScreen = false;
		mouse.x = -100;
		mouse.y = -100;	
	}
	
	//Clear the on screen canvas
	var clear = function(){
        /*var my_gradient = context.createLinearGradient(0, 0, 0, 500);
        my_gradient.addColorStop(0, "black");
        my_gradient.addColorStop(1, "white");*/
		context.fillStyle = "#FFFFFF";
		context.beginPath();
  		context.rect(0, 0, canvas.width, canvas.height);
 		context.closePath();
 		context.fill();
	}
    
    function resizeCanvas(){
        dynamicPathValues();
        context.clearRect(0, 0, canvas.width, canvas.height);
        bgContext.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        coords = [];
        parts =[];
        start();
    }
    
    function drawPaths(){
        /*bgContext.beginPath();
        bgContext.lineWidth="5";
        bgContext.moveTo(760,450);
        bgContext.lineTo(760,650);
        bgContext.lineTo(350,650);
        bgContext.lineTo(350,1000);
        bgContext.lineTo(450,1000);
        bgContext.stroke();*/
        
        //bgContext.moveTo();
        
        //around Work
        //Fix by calculating based off of rect.left+WIDTH*percent.
        //i.e. Jason's example about massive browser window.
       /* bgContext.lineWidth="10";
        bgContext.moveTo(rect.left+(svgboxwidth*.21),topsvgs-10);
        bgContext.lineTo(rect.left+(svgboxwidth*.80),topsvgs-10);
        bgContext.lineTo(rect.left+(svgboxwidth)+18,centersvgdivy);
        bgContext.lineTo(rect.left+(svgboxwidth*.80),bottomsvgs+15);
        bgContext.lineTo(rect.left+(svgboxwidth*.21),bottomsvgs+15);
        bgContext.lineTo(rect.left-18,centersvgdivy);
        bgContext.lineTo(rect.left+(svgboxwidth*.21),topsvgs-10);*/
                
        
        //from work to Resume
       /* bgContext.lineWidth="15";
        bgContext.moveTo(rect.right,centersvgdivy+30);
        bgContext.lineTo(rect.right, resumeTop);
        bgContext.lineWidth="10";
        bgContext.moveTo(resumeLeft,resumeTop);
        bgContext.lineTo(resumeRight, resumeTop);
        bgContext.lineTo(resumeRight, resumeBottom);
        bgContext.lineTo(resumeButtonRight, resumeBottom);
        bgContext.lineTo(resumeButtonRight, resumeBottom);
        bgContext.lineTo(resumeLeft, resumeBottom);
        bgContext.lineTo(resumeLeft, resumeTop);
        bgContext.stroke();*/
        
        //From resume to About
        /*bgContext.lineWidth="10";
        bgContext.moveTo(resumeLeft+80,resumeBottom);
        bgContext.lineTo(resumeLeft+80,resumeBottom+100);
        bgContext.lineTo(resumeLeft-30,resumeBottom+100);
        bgContext.lineTo(resumeLeft-30,hollerMidy);
        bgContext.lineTo(hollerLeft,hollerMidy);
        
        bgContext.moveTo(hollerLeft-5,hollerTop-5);
        bgContext.lineTo(hollerRight+5,hollerTop-5);
        bgContext.lineTo(hollerRight+5,hollerBottom+5);
        bgContext.lineTo(hollerLeft-5,hollerBottom+5);
        bgContext.lineTo(hollerLeft-5,hollerTop-5);
        bgContext.stroke();*/
    }
    
    function simulate(e) {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("mousemove", true, true, window,
    0, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
        canvas.dispatchEvent(evt);
    }

    $("body > section, body > header").each(function(){
        this.addEventListener("mousemove", simulate);
    });
    
    /*function fitTextOnCanvas(contexttype, text, font, xPosition, yPosition) {

        // start with a large font size
        var fontsize = 200;
            do {
                fontsize--;
                bgContext.font = fontsize+"px"+" "+font;
            } while (bgContext.measureText(text).width > canvas.width*.9)

            // draw the text
            bgContext.fillText(text, xPosition, yPosition);
       // }
    }*/
    
}

document.getElementById("loadButton").onclick=function(){
    document.getElementById("loader-wrapper").style.display="none";
    var banner = new Banner();
    banner.initialize("canvas");
};

