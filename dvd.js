//LOGIQUE SVG
const dvdSvg = document.getElementById("dvd"); /*on récupère l'élément svg qui va agir comme un bloc*/
/*on initialise des variables de position*/
let positionX = 400;
let positionY = 250;
/*on initialise des variables de vitesse*/
let speedX = 2;
let speedY = 2;

/*GESTION DES REBONDS AVEC DETECTION DES REBORD DE LA FENETRE*/
function moov(){
    /*on récupère la taille et la position du svg à l'écran*/
    const sizeSvgW = dvdSvg.getBoundingClientRect().width;
    const sizeSvgH = dvdSvg.getBoundingClientRect().height;
    /*on initialise une variable pour éviter le double changement de couleur*/
    let bound = false;

    /*on stock dans des variables la largeur et la hauteur de la fenêtre*/
    const window_W = window.innerWidth;
    const window_H = window.innerHeight;

    /*on vérifie si l'élément svg touche le bord droit ou gauche de la fenêtre*/
    /*si la position et la taille du svg dépasse la largeur de la fenêtre ou si elle est inférieur à 0*/
    if ((positionX + sizeSvgW >= window_W) || (positionX <= 0)){
        speedX = -speedX; //on inverse la valeur de la vitesse
        bound = true; //on détecte un impact
    }
    /*si la position et la taille du svg dépasse la hauteur de la fenêtre ou si elle est inférieur à 0*/
    if ((positionY + sizeSvgH >= window_H) || (positionY <= 0)){
        speedY = -speedY; //on inverse la valeur de la vitesse
        bound = true; //on détecte un impact
    }

    /*on créer une condition de changement de couleur en cas de rebond*/
    //let randomColor = on génère nombre flottant pour 24 bits (16777215) puis on le convertit en entier et enfin on le convertit en chaine de caratères hexadécimale
    if (bound){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        const paths = dvdSvg.querySelectorAll("path"); //on récupère tous les chemins du svg
        paths.forEach(path => { //on boucle chacun des chemins
            path.setAttribute("fill", randomColor); //on met à jour la couleur de chaque chemin
        });
    }
    
    /*on affecte de nouvelle valeur au positions*/
    positionX += speedX;
    positionY += speedY;
    /*on déplace l'élément svg en récupérant les positions*/
    dvdSvg.style.left = positionX + "px";
    dvdSvg.style.top = positionY + "px";
        
    /*on redemande l'animation à la fin de la boucle*/
    requestAnimationFrame(moov)
    };