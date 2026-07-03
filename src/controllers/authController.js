const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    try {

        const { correo, password } = req.body;

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        if (
            usuario.bloqueadoHasta &&
            usuario.bloqueadoHasta > new Date()
        ) {
            return res.status(403).json({
                mensaje: "La cuenta está bloqueada temporalmente. Intente más tarde."
            });
        }

        const passwordCorrecta = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!passwordCorrecta) {

            usuario.intentosFallidos++;

            if (usuario.intentosFallidos >= 5) {

                usuario.bloqueadoHasta = new Date(
                    Date.now() + 15 * 60 * 1000
                );

                usuario.intentosFallidos = 0;

                await usuario.save();

                return res.status(403).json({
                    mensaje: "Cuenta bloqueada por 15 minutos."
                });

            }

            await usuario.save();

            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos",
                intentosRestantes: 5 - usuario.intentosFallidos
            });

        }
        
        usuario.intentosFallidos = 0;
        usuario.bloqueadoHasta = null;

        await usuario.save();
        
        const token = jwt.sign(
            {
                id: usuario._id,
                correo: usuario.correo
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            mensaje: "Login exitoso",
            token
        });

    } catch (error) {

    console.error(error);

    res.status(500).json({
        mensaje: "Error del servidor"
    });

}

};

module.exports = {
    login
};