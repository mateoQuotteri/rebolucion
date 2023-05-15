window.onload = function () {
    const loadedContainer = document.getElementById("loading");
    const main = document.getElementById("main")
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")

    setTimeout(() => {
        
    loadedContainer.classList.add("hidden");
    main.classList.remove("hidden")
    header.classList.remove("hidden")
    footer.classList.remove("hidden")

    }, 2000);
    // loadedContainer.classList.add("hidden");
    // main.classList.remove("hidden")
    
}