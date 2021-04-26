
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
        menu.classList.add("hidden");
        menuOpened = false;
    } else{
        menu.classList.remove("hidden");
        menuOpened = true;
    }
}