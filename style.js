

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



/*//////////////// Menu mobile ///////////////////////*/
let burger = document.getElementById("navMobile");

if (screen.width >766){
    burger.classList.add("navHidden");
}

if (screen.width < 767){
    let nav = document.getElementById("nav");
    nav.classList.add("navHidden");
}



burger.addEventListener("click", function(){
    nav.classList.toggle("navHidden");

    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");

    bar1.classList.toggle("bar1Open");
    bar2.classList.toggle("bar2Open");
    bar3.classList.toggle("bar3Open");

    if(menuOpened == true){
        menuEnregistrement.classList.add("hidden");
        menu.classList.add("hidden");
        menuOpened = false;
    }
})
