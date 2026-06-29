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

        const passwordCorrecta = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!passwordCorrecta) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

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

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};

module.exports = {
    login
};