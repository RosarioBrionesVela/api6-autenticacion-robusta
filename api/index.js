const app = require("../src/app");
const conectarDB = require("../src/config/db");

let conectado = false;

module.exports = async (req, res) => {
    if (!conectado) {
        await conectarDB();
        conectado = true;
    }

    return app(req, res);
};