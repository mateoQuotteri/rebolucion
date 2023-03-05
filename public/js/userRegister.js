const isEmpty = (input) => input.value.trim() != "";
const isNumber = (input)=> input.value.isNaN() == false;

const validations = [
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un email",
            },
        ],
    },
    {
        inputName: "name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un nombre",
            },
        ],
    },
    {
        inputName: "lastname",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un apellido",
            },
        ],
    },
    {
        inputName: "phone",
        validations: [
            {
                validator: isEmpty, isNumber,
                errorMsg: "1-Debes agregar un telefono",
            },
        ],
    },
    {
        inputName: "country",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes ingresar tu pais",
            },
        ],
    },
    {
        inputName: "state",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes ingresar tu estado o provincia",
            },
        ],
    },
    {
        inputName: "city",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes ingresar tu ciudad",
            },
        ],
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes ingresar tu contraseña",
            },
        ],
    },
    {
        inputName: "rePassword",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes confirmar tu contraseña",
            },            
        ],
    },
]

window.onload = function () {
    const formulario = document.getElementById("formulario")
    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault()
        const errores = []

        //Hacer las validaciones
        validations.forEach((inputToValidate) => {
            const input = formulario[inputToValidate.inputName]
            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input)
                if (!isValid) {
                    errores.push(validation.errorMsg)
                    input.parentElement.classList.add("is-invalid")
                    input.parentElement.classList.remove("is-valid")
                    input.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg
                    return
                }
            }
            input.parentElement.classList.add("is-valid")
            input.parentElement.classList.remove("is-invalid")
            input.parentElement.querySelector(".error").innerHTML = ""
        })

        //Si no fallaron las validaciones
        if (errores.length == 0) {
            formulario.submit()
            console.log("estoy aca")
        }
    })
}