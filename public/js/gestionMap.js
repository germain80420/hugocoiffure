
var lat = 50.015460;
var lon = 2.082060;
var macarte = null;
var ecranX = window.innerWidth;
	var ecranY = screen.height;
   ecranX=window.innerWidth-18;
        ecranY=(window.innerHeight-document.getElementById("nav").offsetHeight)/2;
	$('#map').css({'width': ecranX , 'height': ecranY});
window.addEventListener("resize", resize);
function resize(){
    ecranX=window.innerWidth;
    ecranY=(window.innerHeight-document.getElementById("nav").offsetHeight)/2;
$('#map').css({'width': ecranX , 'height': ecranY});
}
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    
    macarte = L.map('map').setView([lat, lon], 15);
    

    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
       // attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 15,
        maxZoom: 20
    }).addTo(macarte);
    var marker = L.marker([lat, lon]).addTo(macarte);
    marker.bindPopup("Nous sommes ici");
}
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};