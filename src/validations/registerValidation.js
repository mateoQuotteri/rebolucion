const { body } = require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Este campo debe estar completo.'),
    body('lastname').notEmpty().withMessage('Este campo debe estar completo.'),
    body('email').isEmail().withMessage('Debes colocar un email valido.'),
    body('phone').notEmpty().withMessage('Debes colocar un celular.'),
    /*Buscar metodo de express valkidaor que valide que el campo contenga un numero de celular*/
    body('password')
        .isLength(5)
        .withMessage('Tu contraseña debe tener un minimo de 5 caracteres'),
    body('country')
        .notEmpty()
        .withMessage('Debes seleccionar el pais en el que resides.'),
    body('state')
        .notEmpty()
        .withMessage('Debes seleccionar el estado en el que resides.'),
    body('city')
        .notEmpty()
        .withMessage('Debes seleccionar la localidad en la que resides.'),
        body('rePassword').custom((value, extra) => {
            if (value !== extra.req.body.password) {
                throw new Error(
                    'La contraseña repetida no coincide con la original'
                )
            }
    

            return true
        }),
        
   
]