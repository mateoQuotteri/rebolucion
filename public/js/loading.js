window.onload = function () {
    const loadedContainer = document.getElementById("loading");
    const main = document.getElementById("main")

    setTimeout(() => {
        
    loadedContainer.classList.add("hidden");
    main.classList.remove("hidden")
    
    }, 2000);
    // loadedContainer.classList.add("hidden");
    // main.classList.remove("hidden")
    
}