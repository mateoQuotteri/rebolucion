const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const button = document.getElementById("showPass")

button.addEventListener("click", function () {
    console.log("hola");
    console.log("Este es el boton "+button);
    if (password.type == "password" && rePassword.type == "password") {
        password.type = "text";
        rePassword.type = "text";
    }else {
        password.type = "password";
        rePassword.type = "password";
    }
})