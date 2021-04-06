

	
var isMobile=false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
    isMobile=true;
    
}
function randomInt(mini, maxi)
{
     var nb = mini + (maxi+1-mini)*Math.random();
     return Math.floor(nb);
}
Array.prototype.shuffle = function(n)
{
     if(!n)
          n = this.length;
     if(n > 1)
     {
          var i = randomInt(0, n-1);
          var tmp = this[i];
          this[i] = this[n-1];
          this[n-1] = tmp;
          this.shuffle(n-1);
     }
}
function convertirSecondes(s){
  return(s-(s%=60))/60+(9<s?'m':'m0')+s+"s";
}
function retourneMeilleurTemps(){

     $.post(
            '../retourneMeilleurScore.php', // Un script PHP que l'on va créer juste après
            {
               jeu:"puzzle",
                niveau:nombresPiecesParLigne
               
            },
        function(data){
 
               
                meilleurScore=data.score;
            pseudoMeilleurScore=data.pseudo;
                 
         
            },
            'json'
         );
    console.log(convertirSecondes(meilleurScore));
}
var nombresPiecesParLigne=8;
var imageFleches=[new Image(),new Image(),new Image(),new Image()];
imageFleches[0].src="../images/flecheHaut.png";
imageFleches[1].src="../images/flecheDroit.png";
imageFleches[2].src="../images/flecheBas.png";
imageFleches[3].src="../images/flechesGauche.png";
var image64=new Image();
image64.src="https://lespetitsjeuxdegege.com/chargement.jpg";
var image=new Image();
image.src="https://lespetitsjeuxdegege.com/11.jpg";
//image64.src="./Images/imagePerso.png";
//var boutonActiverCamera=document.getElementById("boutonActiverCamera");
//var bouton=document.getElementById("bouton");
//var affichageVideo=document.getElementById("sourcevid");
//affichageVideo.style.display="none";
//var video;
var blockSize=0;
    if(window.innerHeight>window.innerWidth)
        blockSize=(window.innerWidth)/nombresPiecesParLigne;
    else
    blockSize=(window.innerHeight*0.8)/nombresPiecesParLigne;
    
    var canvasWidth=blockSize*nombresPiecesParLigne;
    var canvasHeight=blockSize*nombresPiecesParLigne;
    
    var canvas=document.createElement('canvas');
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
 var meilleurScore=0;
    var pseudoMeilleurScore="";
var tempsSecondes=0;
//'use strict';
//
////const videoElement = document.getElementById("sourcevid");
//
//const videoSelect = document.querySelector('select#videoSource');
//const selectors = [videoSelect];
//
//
//
//function gotDevices(deviceInfos) {
//  // Handles being called several times to update labels. Preserve values.
//  const values = selectors.map(select => select.value);
//  selectors.forEach(select => {
//    while (select.firstChild) {
//      select.removeChild(select.firstChild);
//    }
//  });
//  for (let i = 0; i !== deviceInfos.length; ++i) {
//    const deviceInfo = deviceInfos[i];
//    const option = document.createElement('option');
//    option.value = deviceInfo.deviceId;
//    if (deviceInfo.kind === 'videoinput') {
//      option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
//      videoSelect.appendChild(option);
//    } else {
//      console.log('Some other kind of source/device: ', deviceInfo);
//    }
//  }
//  selectors.forEach((select, selectorIndex) => {
//    if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
//      select.value = values[selectorIndex];
//    }
//  });
//}
//
//navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
//
//// Attach audio output device to video element using device/sink ID.
//
//
//
//
//function gotStream(stream) {
//  window.stream = stream; // make stream available to console
//  affichageVideo.srcObject = stream;
//  // Refresh button list in case labels have become available
//  return navigator.mediaDevices.enumerateDevices();
//}
//
//function handleError(error) {
//  console.log('navigator.getUserMedia error: ', error);
//}
//
//function start() {
//  if (window.stream) {
//    window.stream.getTracks().forEach(track => {
//      track.stop();
//    });
//  }
//  
//  const videoSource = videoSelect.value;
//  const constraints = {
//    
//    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
//  };
//  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
//}
//
//
//
//videoSelect.onchange = start;
//
//
//function init() {
//    start();
//boutonActiverCamera.style.display="none";
//    bouton.style.display="inline-block";
//    affichageVideo.style.display="inline-block";
//		/*navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 900, height: 900 } }).then(function(mediaStream) {
//			
//			video = document.getElementById('sourcevid');
//			video.srcObject = mediaStream;
//			
//			video.onloadedmetadata = function(e) {
//				video.play();
//			};
//		  
//		}).catch(function(err) { console.log(err.name + ": " + err.message); });
//	*/
//	}
//function closeCamera(videoElem){
//    let stream = videoElem.srcObject;
//  let tracks = stream.getTracks();
//
//  tracks.forEach(function(track) {
//    track.stop();
//  });
//
//  videoElem.srcObject = null;
//}
	retourneMeilleurTemps();
var listeImages=[];
//init();
       function retourneListeImage(){
        
        $.get(
            'retourneListeImages.php', // Un script PHP que l'on va créer juste après
           
 
            function(data){
    var listeSrcImage=data.split(";");
               
                for(var i=0;i<listeSrcImage.length-1;i++){
                    listeImages.push(new Image());
                    listeImages[i].src="../ImagesPuzzle/"+listeSrcImage[i].toString();
                }
                listeImages.shuffle();
                
                
        //alert(data);
                //retournePosInt(data); 
         //alert(ordreScore[5]);
            }
         );
        
    }

retourneListeImage();
 var numChoixImage=randomInt(0,listeImages.length-1);
/*listeImages[0].src="11.jpg";
listeImages[1].src="12.jpg";
listeImages[2].src="13.jpg";
listeImages[3].src="14.jpg";
listeImages[4].src="15.jpg";
listeImages[5].src="1.jpg";
listeImages[6].src="2.jpg";
listeImages[7].src="3.jpg";
listeImages[8].src="4.jpg";
listeImages[9].src="5.jpg";
listeImages[10].src="6.jpg";
listeImages[11].src="7.jpg";
listeImages[12].src="8.jpg";
listeImages[13].src="9.jpg";
listeImages[14].src="10.jpg";*/

image=listeImages[numChoixImage];
var listePiecesBienPlacees=[];
var listePieces=[];
var listePieceSelec=[];

var numClick=0;
var pieceSelec=false;
var listePieces2=[];
var posXPieceSelec=0;
var posYPieceSelec=0;
var posCompteur=0;
var gameStarted=false;
var widthlinePiece=5;
var widthlineSelec=10;
var imagePlusOuMoins=0;
for(var i=0;i<nombresPiecesParLigne;i++){
   for(var j=0;j<nombresPiecesParLigne;j++){
        listePieces2.push([j,i]);
       listePieces.push([j,i]);
       listePieceSelec.push(false);
       listePiecesBienPlacees.push(false);
   } 
}
var morceauxImage=new Array(0,1,2,3);
window.onload=function(){
    

do{
listePieces2.shuffle();
}while(!testPiecesTouteMalPlace);
    
    
    var positionXTaupe;
    var positionYTaupe;
    var numImage=0;
    var score=0;
    var compteurSecondesRestantes=30;
    var delay=1000;
    var posXPrecedent=0;
    var posYPrecedent=0;
//    function clone(){
//        numChoixImage=-1;
//        var vivi = document.getElementById('sourcevid');
//        
//		var canvas1 = document.getElementById('cvs').getContext('2d');
//    
//		canvas1.drawImage(vivi, 0,0, 900, 900);
//        image64.src="chargement.jpg";
//        ctx.drawImage(image64,0,0,canvasWidth,canvasHeight);
//		var base64=document.getElementById('cvs').toDataURL("image/png");	
//        
//		
//        $.post(
//            'enregistreImageBase64.php', // Un script PHP que l'on va créer juste après
//            {
//                imgBase64:base64
//               
//            },
// 
//            function(data){
// if(data=="succes")
//     
//               
//                 image64.src="./Images/imagePerso.png?"+new Date();
//                
//         
//            },
//            'text'
//         );
//        closeCamera(affichageVideo);
//        boutonActiverCamera.style.display="inline-block";
//        bouton.style.display="none";
//        affichageVideo.style.display="none";
//        
//		//var canvas1 = document.getElementById('cvs').getContext('2d');
//		//canvas1.drawImage(image64, 0,0, 150, 112);
//		//var base64=document.getElementById('cvs').toDataURL("image/png");	//l'image au format base 64
//		//document.getElementById('tar').value='';
//		/*image64.src=base64;
//        image64.width=canvas.width;
//        image64.height=canvas.height;
//        //setTimeout(clone,10);*/
//	}
    initGame();
    refresh();
    chrono();
    //compteARebours();
    retourneMeilleurTemps();
    function initGame(){
       // tempsSecondes=0;
        posXPieceSelec=-1;
        pieceSelec=false;
         listePiecesBienPlacees=[];
listePieces=[];
listePieceSelec=[];



listePieces2=[];


for(var i=0;i<nombresPiecesParLigne;i++){
   for(var j=0;j<nombresPiecesParLigne;j++){
        listePieces2.push([j,i]);
       listePieces.push([j,i]);
       listePieceSelec.push(false);
       listePiecesBienPlacees.push(false);
   } 
}
        do{
listePieces2.shuffle();
}while(!testPiecesTouteMalPlace);
        
    }
   
    function compteARebours(){
        if(compteurSecondesRestantes>0){
            compteurSecondesRestantes--;
            setTimeout(compteARebours,1000);
        }
    }
    function testPiecesTouteMalPlace(){
        var compteur=0;
        var nbPiecesMalPlaces=0;
        for(var i=0;i<nombresPiecesParLigne;i++){
        for(var j=0;j<nombresPiecesParLigne;j++){
            if(listePieces2[compteur][0]!=listePieces[compteur][0]&&listePieces2[compteur][1]!=listePieces[compteur][1])
                nbPiecesMalPlaces++;
            
            compteur++;
        }}
        if(nbPiecesMalPlaces==listePieces2.length){
            return true;
        }else
            return false;
    }
    function testPiecesTouteBienPlace(){
        var compteur=0;
        var nbPiecesMalPlaces=0;
        for(var i=0;i<nombresPiecesParLigne;i++){
        for(var j=0;j<nombresPiecesParLigne;j++){
            if(listePieces2[compteur][0]==listePieces[compteur][0]&&listePieces2[compteur][1]==listePieces[compteur][1])
                nbPiecesMalPlaces++;
            
            compteur++;
        }}
        if(nbPiecesMalPlaces==listePieces2.length){
            return true;
        }else
            return false;
    }
    function refresh(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
         
        if(gameStarted){
            if(testPiecesTouteBienPlace()){
                
                gameStarted=false;
                  if(meilleurScore>tempsSecondes){
            $('#formMeilleurScore').modal('toggle');
            $('#meilleurScore').text("SCORE : "+convertirSecondes(tempsSecondes));
                
            }
            else{
                 $('#exampleModalCenter').modal('toggle');
            $('#score').text("SCORE : "+convertirSecondes(tempsSecondes));
            }
            }
             
       var posImage=0;
        
        for(var i=0;i<nombresPiecesParLigne;i++){
        for(var j=0;j<nombresPiecesParLigne;j++){
            if(listePieces2[posImage][0]==listePieces[posImage][0]&&listePieces2[posImage][1]==listePieces[posImage][1])
                            listePiecesBienPlacees[posImage]=true;
            ctx.lineWidth=10;
            
            ctx.strokeStyle="rgb(0,0,0)";
            try{
            ctx.drawImage(image,listePieces2[posImage][0]*(image.width/nombresPiecesParLigne),listePieces2[posImage][1]*(image.height/nombresPiecesParLigne),image.width/nombresPiecesParLigne,image.height/nombresPiecesParLigne,j*blockSize,i*blockSize,blockSize,blockSize);
            
            }catch{
                
            }
            
            
            if(!listePiecesBienPlacees[posImage]){
                ctx.lineWidth=widthlinePiece/2;
                ctx.strokeStyle="rgb(255,0,0)";
            if(listePieces2[posImage][0]==0){
                
                ctx.beginPath();
                ctx.moveTo((j*blockSize)+(widthlinePiece/2),(i*blockSize));
                ctx.lineTo((j*blockSize)+(widthlinePiece/2),(i*blockSize)+blockSize);
                ctx.stroke();
                ctx.closePath();
            }
            if(listePieces2[posImage][1]==0){
                
                ctx.beginPath();
                ctx.moveTo((j*blockSize),(i*blockSize)+(widthlinePiece/2));
                ctx.lineTo((j*blockSize)+blockSize,(i*blockSize)+(widthlinePiece/2));
                ctx.stroke();
                ctx.closePath();
            }
            if(listePieces2[posImage][0]==nombresPiecesParLigne-1){
                
                ctx.beginPath();
                ctx.moveTo((j*blockSize)+blockSize-(widthlinePiece/2),i*blockSize);
                ctx.lineTo((j*blockSize)+blockSize-(widthlinePiece/2),(i*blockSize)+blockSize);
                ctx.stroke();
                ctx.closePath();
            }
            if(listePieces2[posImage][1]==nombresPiecesParLigne-1){
                
                ctx.beginPath();
                ctx.moveTo(j*blockSize,(i*blockSize)+blockSize-(widthlinePiece/2));
                ctx.lineTo((j*blockSize)+blockSize,(i*blockSize)+blockSize-(widthlinePiece/2));
                ctx.stroke();
                ctx.closePath();
            }
                
            }
        posImage++;
            
            
    }}
            posImage=0;
            for(i=0;i<nombresPiecesParLigne;i++){
                for(j=0;j<nombresPiecesParLigne;j++){
                    ctx.lineWidth=widthlinePiece/2;
                    ctx.strokeStyle="rgb(0,0,0)";
                    if(!listePiecesBienPlacees[posImage])
            ctx.strokeRect(j*blockSize,i*blockSize,blockSize,blockSize);
                posImage++;}}
        posImage=0;
            for(i=0;i<nombresPiecesParLigne;i++){
                for(j=0;j<nombresPiecesParLigne;j++){
                   
                    if(listePieceSelec[posImage]){
                ctx.lineWidth=widthlinePiece/2;
                ctx.strokeStyle="rgb(255,255,0)";
            ctx.strokeRect((j*blockSize),(i*blockSize),blockSize,blockSize);
                
            }
                    posImage++;
                }
                
            }
        
        }
        else{
            
            if(window.innerHeight>window.innerWidth)
        blockSize=(window.innerWidth*0.8)/nombresPiecesParLigne;
    else
    blockSize=(window.innerHeight*0.8)/nombresPiecesParLigne;
    
    canvasWidth=blockSize*nombresPiecesParLigne;
    canvasHeight=blockSize*nombresPiecesParLigne;
    
    
    canvas.width=canvasWidth;
    canvas.height=canvasHeight;
            
            widthlinePiece=blockSize/10;
            
          //  if(numChoixImage>-1)
            image=listeImages[numChoixImage];
           // else
            //image=image64;
            //image.width=canvasWidth;
            //image.height=canvasHeight;
            try{
            ctx.drawImage(image,0,0,canvasWidth,canvasHeight);
           }
            catch{
                if(imagePlusOuMoins>0){
                if(numChoixImage<listeImages.length-1)
                numChoixImage++;
            else
                numChoixImage=0;
                }
            else{
                if(numChoixImage>0)
                numChoixImage--;
            else
                numChoixImage=listeImages.length-1;
                }
            }
            ctx.lineWidth=widthlinePiece/2;
            for(i=0;i<nombresPiecesParLigne;i++){
        for(j=0;j<nombresPiecesParLigne;j++){
            ctx.strokeRect(j*blockSize,i*blockSize,blockSize,blockSize);
        }}
        
        ctx.lineWidth=2;
        
            ctx.fillStyle="rgba(250,0,0,0.6)";
        ctx.beginPath();
    ctx.moveTo((canvasWidth/2),widthlinePiece);
    ctx.lineTo((canvasWidth/2)+(blockSize/2)-widthlinePiece, blockSize-widthlinePiece);
    ctx.lineTo((canvasWidth/2)-(blockSize/2)+widthlinePiece, blockSize-widthlinePiece);
    ctx.fill();
        ctx.closePath();
        ctx.strokeStyle="rgb(250,250,0)";
         ctx.beginPath();
    ctx.moveTo((canvasWidth/2),widthlinePiece);
    ctx.lineTo((canvasWidth/2)+(blockSize/2)-widthlinePiece, blockSize-widthlinePiece);
    ctx.lineTo((canvasWidth/2)-(blockSize/2)+widthlinePiece, blockSize-widthlinePiece);
        ctx.closePath();
    ctx.stroke();
        
        
         ctx.beginPath();
    ctx.moveTo(canvasWidth-widthlinePiece,canvasHeight/2);
    ctx.lineTo((canvasWidth-blockSize)+widthlinePiece, (canvasHeight/2)-(blockSize/2)+widthlinePiece);
    ctx.lineTo((canvasWidth-blockSize)+widthlinePiece, (canvasHeight/2)+(blockSize/2)-widthlinePiece);
    ctx.fill();
        ctx.closePath();
        ctx.strokeStyle="rgb(250,250,0)";
         ctx.beginPath();
    ctx.moveTo(canvasWidth-widthlinePiece,canvasHeight/2);
    ctx.lineTo((canvasWidth-blockSize)+widthlinePiece, (canvasHeight/2)-(blockSize/2)+widthlinePiece);
    ctx.lineTo((canvasWidth-blockSize)+widthlinePiece, (canvasHeight/2)+(blockSize/2)-widthlinePiece);
        ctx.closePath();
    ctx.stroke();
        
        
        
         ctx.beginPath();
    ctx.moveTo(canvasWidth/2,canvasHeight-widthlinePiece);
    ctx.lineTo((canvasWidth/2)-(blockSize/2)+widthlinePiece, canvasHeight+widthlinePiece-blockSize);
    ctx.lineTo((canvasWidth/2)+(blockSize/2)-widthlinePiece, canvasHeight+widthlinePiece-blockSize);
    ctx.fill();
        ctx.closePath();
        ctx.strokeStyle="rgb(250,250,0)";
         ctx.beginPath();
   ctx.moveTo(canvasWidth/2,canvasHeight-widthlinePiece);
     ctx.lineTo((canvasWidth/2)-(blockSize/2)+widthlinePiece, canvasHeight+widthlinePiece-blockSize);
    ctx.lineTo((canvasWidth/2)+(blockSize/2)-widthlinePiece, canvasHeight+widthlinePiece-blockSize);
        ctx.closePath();
    ctx.stroke();
        
        
        
        
        
        ctx.beginPath();
    ctx.moveTo(widthlinePiece,canvasHeight/2);
    ctx.lineTo(blockSize-widthlinePiece, (canvasHeight/2)-(blockSize/2)+widthlinePiece);
    ctx.lineTo(blockSize-widthlinePiece, (canvasHeight/2)+(blockSize/2)-widthlinePiece);
    ctx.fill();
        ctx.closePath();
        ctx.strokeStyle="rgb(250,250,0)";
         ctx.beginPath();
    ctx.moveTo(widthlinePiece,canvasHeight/2);
    ctx.lineTo(blockSize-widthlinePiece, (canvasHeight/2)-(blockSize/2)+widthlinePiece);
    ctx.lineTo(blockSize-widthlinePiece, (canvasHeight/2)+(blockSize/2)-widthlinePiece);
        ctx.closePath();
    ctx.stroke();
        //
         //ctx.drawImage(imageFleches[0],(canvasWidth/2)-((canvasWidth/nombresPiecesParLigne)/2),0,canvasWidth/nombresPiecesParLigne,canvasWidth/nombresPiecesParLigne);
        //ctx.drawImage(imageFleches[1],canvasWidth-blockSize,(canvasHeight/2)-((canvasHeight/nombresPiecesParLigne)/2),canvasWidth/nombresPiecesParLigne,canvasWidth/nombresPiecesParLigne);
         //ctx.drawImage(imageFleches[2],(canvasWidth/2)-((canvasWidth/nombresPiecesParLigne)/2),canvasHeight-blockSize,canvasWidth/nombresPiecesParLigne,canvasWidth/nombresPiecesParLigne);
       // ctx.drawImage(imageFleches[3],0,(canvasWidth/2)-((canvasWidth/nombresPiecesParLigne)/2),canvasWidth/nombresPiecesParLigne,canvasWidth/nombresPiecesParLigne);
        }
        /*for(i=0;i<nombresPiecesParLigne;i++){
        ctx.strokeStyle="rgb(0,0,0)";
            ctx.lineWidth=5;
            ctx.beginPath();
            ctx.moveTo(i*blockSize,0);
            ctx.lineTo(i*blockSize,canvasHeight);
            ctx.stroke();
            ctx.closePath();*$=l
          ctx.beginPath();
            ctx.moveTo(0,i*blockSize);
            ctx.lineTo(0,canvasWidth);
            ctx.stroke();
            ctx.closePath();
        }*/
       
      setTimeout(refresh,100);
    }
//    boutonActiverCamera.addEventListener("click",init);
//bouton.addEventListener("click",clone);

canvas.ondblclick=function(e){
    e.preventDefault();
}
 $("#validerScore").click(function(event){
        event.preventDefault();
        if($("#pseudo").val().length==0)
            alert("Tapez votre pseudo");
        else{
             $.post(
            '../enregistreMeilleurScore.php', // Un script PHP que l'on va créer juste après
            {
               jeu:"puzzle",
                score:tempsSecondes,
                pseudo:$("#pseudo").val(),
                niveau:nombresPiecesParLigne
               
            },
 
            function(data){
 
               
                
                 
         
            },
            'text'
         );
            meilleurScore=tempsSecondes;
                pseudoMeilleurScore=$("#pseudo").val();
            $("#formMeilleurScore").modal('toggle');
        }
    });
function chrono(){
    if(gameStarted)
        tempsSecondes+=1;
    
    retourneMeilleurTemps();
    if(gameStarted)
    $("#chrono").text(convertirSecondes(tempsSecondes));
    else{
         $("#chrono").text("Meilleur chrono "+nombresPiecesParLigne+"X"+nombresPiecesParLigne+" : "+convertirSecondes(meilleurScore)+"  img "+(numChoixImage+1)+"/"+listeImages.length);
    }
    setTimeout(chrono,1000);
}
canvas.onclick=function(e){
        e.preventDefault();
        //listePieces2.shuffle(15);
        canvasPosition = canvas.getBoundingClientRect();
       
       var posXClick=parseInt((e.clientX-canvasPosition.left)/blockSize);
       var posYClick=parseInt((e.clientY-canvasPosition.top)/blockSize);
        //alert(posXClick+" "+posYClick);
        if(!gameStarted){
            posXClick=parseInt((e.clientX-canvasPosition.left)/blockSize);
        posYClick=parseInt((e.clientY-canvasPosition.top)/blockSize);
            if(posXClick==0){
                imagePlusOuMoins=-1;
                if(numChoixImage==0)
                    numChoixImage=listeImages.length-1;
                else
                    numChoixImage--;
            }
            else if(posXClick==nombresPiecesParLigne-1){
                imagePlusOuMoins=1;
                if(numChoixImage==listeImages.length-1)
                    numChoixImage=0;
                else
                    numChoixImage++;
            }
            else if(posYClick==0){
                if(nombresPiecesParLigne>3)
                {
                    nombresPiecesParLigne--;
                    retourneMeilleurTemps();
                }
                
            }
            else if(posYClick==nombresPiecesParLigne-1){
                if(nombresPiecesParLigne<14){
                    nombresPiecesParLigne++;
                    retourneMeilleurTemps();
                }
            }
            else{
                tempsSecondes=0;
                retourneMeilleurTemps();
                initGame();
                
                        //canvas.webkitRequestFullscreen();
                
                gameStarted=true;
                return;
            }
                
            /*if(posYClick==0){
                if(nombresPiecesParLigne>3)
                    nombresPiecesParLigne--;
            }
            if(posYClick==nombresPiecesParLigne-1){
                
                if(nombresPiecesParLigne<10)
                    nombresPiecesParLigne++;
            }
        */
                
        }
    
        if(gameStarted){
            canvasPosition = canvas.getBoundingClientRect();
           //var newBlockSize=(canvas.height)/nombresPiecesParLigne;
//          //  var newBlockSizeWidth
//            posXClick=parseInt((e.clientX)/newBlockSize)-nombresPiecesParLigne/2;
//        posYClick=parseInt((e.clientY-canvasPosition.top)/newBlockSize);
//            
            
//           if(!isMobile){
             posXClick=parseInt((e.clientX-canvasPosition.left)/blockSize);
        posYClick=parseInt((e.clientY-canvasPosition.top)/blockSize);
//            else{
//                 posXClick=parseInt((e.clientX-canvasPosition)/(screen.width/nombresPiecesParLigne));
//       posYClick=parseInt((e.clientY-canvasPosition)/(screen.height/nombresPiecesParLigne));
//            }
        var compteur=0;
        for(var i=0;i<nombresPiecesParLigne;i++){
            for(var j=0;j<nombresPiecesParLigne;j++){
                
                if(posXClick==j&&posYClick==i&&!listePiecesBienPlacees[compteur]){
                    if(!listePiecesBienPlacees[compteur])
                pieceSelec=!pieceSelec;
                    if(pieceSelec){
                            listePieceSelec[compteur]=true;
                        posXPieceSelec=listePieces2[compteur][0];
                        posYPieceSelec=listePieces2[compteur][1];
                        posCompteur=compteur;
                    }else{
                        if(!listePiecesBienPlacees[compteur]&&posXPieceSelec!=-1){
                        listePieceSelec[posCompteur]=false;
                        var posXTemp=listePieces2[compteur][0];
                        var posYTemp=listePieces2[compteur][1];
                        listePieces2[compteur][0]=posXPieceSelec;
                        listePieces2[compteur][1]=posYPieceSelec;
                        listePieces2[posCompteur][0]=posXTemp;
                        listePieces2[posCompteur][1]=posYTemp;
                        
                        }
                       
                        
                    }
                }
                       compteur++;
            }
        }}
        /*if((posXClick==positionXTaupe&&posYClick==positionYTaupe)||(posXClick==posXPrecedent&&posYClick==posYPrecedent)&&compteurSecondesRestantes>0) {
            if(numImage%2==0||numImage==0){
                ctx.fillStyle="rgba(0,255,0,0.6)";
                
                ctx.fillRect(posXClick*blockSize,posYClick*blockSize,blockSize,blockSize);
               score++;
                //compteurSecondesRestantes+=5;
                //delay-=10;
                //refresh();
                return;
            }
            
            else
                {
                   ctx.fillStyle="rgba(255,0,0,0.6)"; 
                ctx.fillRect(posXClick*blockSize,posYClick*blockSize,blockSize,blockSize);
                    if(score>0)
                        score--;
                   /* if(compteurSecondesRestantes>10)
                        compteurSecondesRestantes-=10;
                    if(compteurSecondesRestantes<10)
                        compteurSecondesRestantes=0;
                    //delay-=10;
                    //refresh();
                    return;
                }
            
            
        }*/
            
    };
    
};