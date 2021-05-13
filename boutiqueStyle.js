if (screen.width < 767){
    

    let abo1 = document.getElementById("abo1");
    let abo2 = document.getElementById("abo2");
    let abo3 = document.getElementById("abo3");

    
    abo1.classList.remove("closed");
    abo2.classList.add("closed");
    abo3.classList.add("closed");

    abo1.addEventListener("click", () => {
        description1.classList.remove("hidden");
        description2.classList.add("hidden");
        abo1.classList.remove("closed");
        abo2.classList.add("closed");
        abo3.classList.add("closed");
        description3.classList.add("hidden");
    })

    abo2.addEventListener("click", () => {
        description1.classList.add("hidden");
        description2.classList.toggle("hidden");
        description3.classList.add("hidden");
        abo1.classList.add("closed");
        abo2.classList.remove("closed");
        abo3.classList.add("closed");
        
    })

    abo3.addEventListener("click", () => {
        description1.classList.add("hidden");
        description2.classList.add("hidden");
        description3.classList.toggle("hidden");
        abo1.classList.add("closed");
        abo2.classList.add("closed");
        abo3.classList.remove("closed");
    })
}