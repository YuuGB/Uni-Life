
VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 2,
    speed: 1000,
    glare : true,
    reverse: false,
    scale: 1.1

});

let menu = document.getElementById("formulaireConnexion");
let menuEnregistrement = document.getElementById("formulaireEnregistrement");
let menuOpened = false;

function clickMenu() {
    
    if (menuOpened == true){
        menu.classList.remove("visible");
        menuEnregistrement.classList.remove("visible");
        menuOpened = false;
    } else{
        menu.classList.add("visible");
        menuOpened = true;
    }
}

function enregistrement(){
    menu.classList.remove("visible");
    menuEnregistrement.classList.add("visible");
}

function connexion(){
    menu.classList.add("visible");
    menuEnregistrement.classList.remove("visible");
    event.preventDefault;
}

/*/////// Temporaire //////*/

document.querySelector(".boutonTemporaire").addEventListener("click", function(event){
    event.preventDefault();
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



function Slider(){
    
    let media = document.getElementById("slider");
    console.log("ok1");
    let imageEnCours = images[nombreImage];
    media.innerHTML = "<img id='slider' src =''>"
    let slider = document.getElementById("slider");
    slider.setAttribute("src", imageEnCours.src );
    console.log("ok");
    console.log(images[nombreImage]);
    nombreImage++;
    if (nombreImage < images.length){
    setTimeout(Slider, 2500);
    } else {
        nombreImage = 0;
    setTimeout(Slider, 2500);
    }

}

window.onload = Slider();