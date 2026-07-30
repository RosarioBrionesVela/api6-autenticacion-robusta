require("dotenv").config();

const bcrypt = require("bcrypt");
const conectarDB = require("./src/config/database");
const Usuario = require("./src/models/Usuario");

const crearUsuario = async () => {
    try {
        await conectarDB();

        const existe = await Usuario.findOne({
            correo: "chayito@test.com"
        });

        if (existe) {
            console.log("El usuario ya existe");
            process.exit();
        }

        const passwordEncriptada = await bcrypt.hash("123456", 10);

        const usuario = new Usuario({
            nombre: "Chayito",
            correo: "chayito@test.com",
            password: passwordEncriptada
        });

        await usuario.save();

        console.log("Usuario creado correctamente");
        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

crearUsuario();