require("dotenv").config();

const app = require("./src/app");
const conectarDB = require("./src/config/database");

const PORT = process.env.PORT || 5100;

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});