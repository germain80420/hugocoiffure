var isMobile=false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
    isMobile=true;
    
}
var blockSize=0;
var canvasWidth=0;
var canvasHeight=0;
var canvas=document.createElement('canvas');    
var listeImages = [];
var isPortrait=false;
         
   
    
    function getImages(){
       
        $.get(
            '/all/json', 
           
 
            function(data){
                for(var i=0;i<data.length;i++){
                    var image=new Image();
                    image.src = "../images/"+data[i].src;
                    listeImages.push(image);
                    console.log(data[i].src);
                }
                //console.log(listeImages);
               
            }
        )  
        
    }
    getImages();
    
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
    
    var compteurImage=0;
    var tempsEcoulee=0;
    setInterval(() => {
        refresh();
    }, 5000);
    refresh();
    
    

    function refresh(){
        canvasWidth=window.innerWidth;///2;
        canvasHeight=window.innerHeight-document.getElementById("nav").offsetHeight//)/2;
        if(canvasHeight>canvasWidth){
            canvasHeight/=2;
        }
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

