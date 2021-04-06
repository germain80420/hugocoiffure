var isMobile=false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
    isMobile=true;
    
}
var blockSize=0;
var canvasWidth=0;
var canvasHeight=0;
var canvas=document.createElement('canvas');    
var listeImages = [new Image(),new Image(),new Image(),new Image()];
    listeImages[0].src="../images/coiffureHomme.jpg";
    listeImages[1].src="../images/coffureHomme2.jpg";
    listeImages[2].src="../images/coiffureFemme3.jpg";
    listeImages[3].src="../images/coiffureFemme2.jpg";        
   
    
    
    
    window.onload=function(){
        
    
        canvasWidth=window.innerWidth;
        canvasHeight=window.innerHeight-document.getElementById("nav").offsetHeight;
        canvas.width=canvasWidth;
    canvas.height=canvasHeight;
    document.getElementById("canvas").appendChild(canvas);
    var tailleBorderWidth=5;
    var defBorder=tailleBorderWidth.toString()+"px solid";
		//canvas.style.border = defBorder;
        canvas.style.display="block";
    canvas.style.margin="auto";
    var ctx=canvas.getContext("2d");
    var canvasPosition = canvas.getBoundingClientRect();
    var listeImages = [new Image(),new Image(),new Image(),new Image()];
    listeImages[0].src="../images/coiffureHomme.jpg";
    listeImages[1].src="../images/coffureHomme2.jpg";
    listeImages[2].src="../images/coiffureFemme3.jpg";
    listeImages[3].src="../images/coiffureFemme2.jpg";
    var compteurImage=0;
    var tempsEcoulee=0;
    setInterval(() => {
        refresh();
    }, 5000);
    refresh();
    
    

    function refresh(){
        canvasWidth=window.innerWidth;
        canvasHeight=window.innerHeight-document.getElementById("nav").offsetHeight;
        canvas.width=canvasWidth;
    canvas.height=canvasHeight;
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        ctx.drawImage(listeImages[compteurImage],0,0,canvasWidth,canvasHeight);
        console.log(compteurImage);
        if(compteurImage<listeImages.length-1){
           
                compteurImage++;
        }
            
        else
        compteurImage=0;
        
       
        
        
    }

    window.addEventListener("resize", resize);
function resize(){
    refresh();
}
    
}

