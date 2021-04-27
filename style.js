
VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 2,
    speed: 1000,
    glare : true,
    reverse: false,
    scale: 1.1

});

let menu = document.getElementById("formulaireConnexion");
let menuOpened = false;

function clickMenu() {
    
    if (menuOpened == true){
        menu.classList.remove("visible");
        menuOpened = false;
    } else{
        menu.classList.add("visible");
        menuOpened = true;
    }
}

/*/////// Temporaire //////*/

document.querySelector("#boutonTemporaire").addEventListener("click", function(event){
    event.preventDefault();
})

document.querySelector("#boutonEnregistrement").addEventListener("click", function(event){
    event.preventDefault();
})