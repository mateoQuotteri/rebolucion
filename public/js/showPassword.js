const oldPassword = document.getElementById("password");
const newPassword = document.getElementById("re-password");
const button = document.getElementById("showPass")

button.addEventListener("click", function () {
    console.log("Este es el boton "+button);
    if (oldPassword.type == "password" && newPassword.type == "password") {
        oldPassword.type = "text";
        newPassword.type = "text";
    }else {
        oldPassword.type = "password";
        newPassword.type = "password";
    }
})