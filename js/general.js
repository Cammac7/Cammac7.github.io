/*Portfolio*/
/*Show modals when divs are clicked*/
var  project1 = document.getElementById("emonsters");
            project1.addEventListener('click', function(evt) {
                $('#portfolioModal1').modal('show');
            });

var  project2 = document.getElementById("music");
            project2.addEventListener('click', function(evt) {
                $('#portfolioModal2').modal('show');
            });

var  project3 = document.getElementById("pianimals");
            project3.addEventListener('click', function(evt) {
                $('#portfolioModal3').modal('show');
            });
var  project4 = document.getElementById("websites");
            project4.addEventListener('click', function(evt) {
                $('#portfolioModal4').modal('show');
            });
var  project5 = document.getElementById("babyninja");
            project5.addEventListener('click', function(evt) {
                $('#portfolioModal5').modal('show');
            });
var  project6 = document.getElementById("ncaabracket");
            project6.addEventListener('click', function(evt) {
                $('#portfolioModal6').modal('show');
            });
var  project7 = document.getElementById("vimcolorscheme");
            project7.addEventListener('click', function(evt) {
                $('#portfolioModal7').modal('show');
            });
var  project8 = document.getElementById("catan");
            project7.addEventListener('click', function(evt) {
                $('#portfolioModal8').modal('show');
            });
var  project9 = document.getElementById("campystructs");
            project7.addEventListener('click', function(evt) {
                $('#portfolioModal9').modal('show');
            });

//var left = $('#worktext').offset().left - parseFloat($('#worktext').css('marginLeft').replace(/auto/, 0));
var left = firstBoxLocation.getBoundingClientRect().left + window.pageXOffset - firstBoxLocation.ownerDocument.documentElement.clientLeft;
var babyEnd = babyninja.getBoundingClientRect().left + window.pageXOffset - babyninja.ownerDocument.documentElement.clientLeft;
var babyRight = babyEnd + document.getElementById('babyninja').offsetWidth;
$(window).scroll(function (event) {
// what the y position of the scroll is
var xScroll = $(this).scrollTop();
console.log(babyRight);
console.log(xScroll);
// whether that's below the form
if ((xScroll >= left) && (xScroll < babyRight)) {
  // if so, ad the fixed class
  $('#worktext').addClass('fixed');
} else {
  // otherwise remove it
  $('#worktext').removeClass('fixed');
}
});