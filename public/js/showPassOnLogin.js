

window.onload = function () {

    
    
    
    const password = document.getElementById("password");
    const button = document.getElementById("showPass")
    
    button.addEventListener("click", function () {
        console.log("hola");
        console.log("Este es el boton "+button);
        if (password.type == "password" ) {
            password.type = "text";
           
        }else {
            password.type = "password";
        }
    })
    }
    