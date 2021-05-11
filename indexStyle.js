/*/////// Slider //////*/
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