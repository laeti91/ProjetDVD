/*const container = document.getElementById("Objdvd"); /*on récupère la div contenant le svg*/
const dvdSvg = document.getElementById("dvd"); /*on récupère l'élément svg qui va agir comme un bloc*/
/*on initialise des variables de position*/
let positionX = 0;
let positionY = 0;
/*on initialise des variables de vitesse*/
let speedX = 2;
let speedY = 2;

function moov(){
    /*on affecte de nouvelle valeur au positions*/
    positionX += speedX;
    positionY += speedY;
    /*on déplace l'élément svg en récupérant les positions*/
    dvdSvg.style.transform = `translate(${positionX}px, ${positionY}px)`;
    
    /*gestion des rebonds avec détection des bords de la fenêtre
    /*on récupère la taille du svg*/
    dvdSvgWidth = dvdSvg.getBoundingClientRect();

    /*on redemande l'animation à la fin de la boucle*/
    requestAnimationFrame(moov)
};