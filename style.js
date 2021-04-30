

let menu = document.getElementById("formulaireConnexion");
let menuEnregistrement = document.getElementById("formulaireEnregistrement");
let menuOpened = false;

function clickMenu() {
    
    if (menuOpened == true){
        menu.classList.add("hidden");
        menuEnregistrement.classList.add("hidden");
        menuOpened = false;
    } else{
        menu.classList.remove("hidden");
        menuOpened = true;
    }
}

function enregistrement(){
    menu.classList.add("hidden");
    menuEnregistrement.classList.remove("hidden");
}

function connexion(){
    menu.classList.remove("hidden");
    menuEnregistrement.classList.add("hidden");
}

/*/////// Temporaire //////*/

document.querySelector(".boutonTemporaire").addEventListener("click", function(event){
    event.preventDefault();
    location.href = "espaceMembre.html";
})

document.querySelector(".boutonEnregistrement").addEventListener("click", function(event){
    event.preventDefault();
})

document.querySelector("#boutonConnexion").addEventListener("click", function(event){
    event.preventDefault();
})

document.querySelector("#boutonTempoConnexion").addEventListener("click", function(event){
    event.preventDefault();
})

/*/////// Test //////*/
class Images {
    constructor (src){
        this.src = src;
    }
}
let images = [
    new Images ("Images/arma01.jpg"),
    new Images ("Images/arma02.jpg"),
    new Images ("Images/arma03.jpg"),
    new Images ("Images/arma04.jpg"),
    new Images ("Images/arma05.jpg"),
];
let nombreImage = 0;



let cache = document.getElementById("cache");
let slider = document.getElementById("slider");
let imageEnCours = images[nombreImage];

function Slider(){
    
    let media = document.getElementById("slider");
    let imageEnCours = images[nombreImage];
    media.innerHTML = "<img id='slider' src =''>"
    let slider = document.getElementById("slider");
    slider.setAttribute("src", imageEnCours.src );
    nombreImage++;
    if (nombreImage == images.length){
        nombreImage = 0;
    ;
    }

}

window.onload = setInterval(Slider, 2500);