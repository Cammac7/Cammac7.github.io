function Banner() {
	
    var keyword = "Interaction";
    var keyword2 = "Designer";
    var canvas;
	var context;
	
	var bgCanvas;
	var bgContext;
	
	var denseness = 10;
	
	//Each particle/icon
	var parts = [];
	
	var mouse = {x:-100,y:-100};
	var mouseOnScreen = false;
	
	var itercount = 0;
	var itertot = 40;

	var cwidth = $(document).width();
    var cheight = $(document).height();

    
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
        window.addEventListener('resize', resizeCanvas, false);
        
		start();
	}
	
	var start = function(){
		bgContext.fillStyle = "#333";
        bgContext.fontWeight = "300";
		bgContext.font = '167px Arial';
        //fitTextOnCanvas("bgContext", keyword, "Arial", 50, 450);
        //fitTextOnCanvas("bgContext", keyword2, "Arial", 450, 400);
        
		//bgContext.fillText(keyword, 500, 290);
        //bgContext.fillText(keyword2, 500, 400);
        bgContext.fillText(keyword, 53, 410);
        bgContext.fillText(keyword2, 55, 550);
		bgContext.beginPath();
        bgContext.lineWidth="5";
        bgContext.moveTo(760,450);
        bgContext.lineTo(760,650);
        bgContext.lineTo(350,650);
        bgContext.lineTo(350,1000);
        bgContext.stroke();
        
		clear();	
		getCoords();
        //context.fillStyle = "#000000";
        //context.font = '100px Arial';
        //fitTextOnCanvas("context", keyword, "Quicksand", 85, 275);
        //context.fillText(keyword, 85, 275);
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
                    drawCircle(width, height);
                  }
            }
        }
        
        setInterval( update, 40 );
	}
	
	var drawCircle = function(x, y){
		
		var startx = (Math.random() * canvas.width);
		var starty = (Math.random() * canvas.height);
		
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
			 v:{x:velx , y: vely}
			}
		)
	}
		
	var update = function(){
		var i, dx, dy, sqrDist, scale;
		itercount++;
		clear();
        //context.fillStyle = "#000000";
        //context.fillText(keyword, 85, 275);
        //fitTextOnCanvas("context", keyword, "Quicksand", 85, 275);
		for (i = 0; i < parts.length; i++){
					
			//If the dot has been released
			if (parts[i].r == true){
				//Fly into infinity!!
				parts[i].x2 += parts[i].v.x;
		        parts[i].y2 += parts[i].v.y;
			//Perhaps I should check if they are out of screen... and kill them?
			}
			if (itercount == itertot){
				parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 6};
				parts[i].r = false;
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
		context.fillStyle = "#000000";
		context.beginPath();
  		context.rect(0, 0, canvas.width, canvas.height);
 		context.closePath();
 		context.fill();
	}
    
    function resizeCanvas(){
        cwidth = $(document).width();
        cheight = $(document).height();
        
        var tempCanvas = document.createElement('canvas');
		var tempContext = tempCanvas.getContext('2d');
        
        //Draw current canvas to temp canvas
        tempContext.drawImage(context.canvas, 0, 0);
        
        context.canvas.width = cwidth;
		context.canvas.height = cheight;
        
        //Draw temp canvas back to the current canvas
        context.drawImage(tempContext.canvas, 0, 0);
    }
    
    function simulate(e) {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("mousemove", true, true, window,
    0, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
        canvas.dispatchEvent(evt);
        console.log("Emulated.");
    }

    $("body > section, body > header").each(function(){
        this.addEventListener("mousemove", simulate);
    });
    
    function fitTextOnCanvas(contexttype, text, font, xPosition, yPosition) {

        // start with a large font size
        var fontsize = 200;
            do {
                fontsize--;
                bgContext.font = fontsize+"px"+" "+font;
            } while (bgContext.measureText(text).width > canvas.width*.9)

            // draw the text
            bgContext.fillText(text, xPosition, yPosition);
       // }
    }
    
}

var banner = new Banner();
banner.initialize("canvas");