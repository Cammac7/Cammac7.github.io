var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==100){
    document.getElementById("loadButton").style.visibility = "visible";
    clearInterval(interval);
  }
},60);

document.getElementById("loadButton").onclick=function(){
    var d = document.getElementsByTagName('body');
    d.className += " loaded";
};
