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
