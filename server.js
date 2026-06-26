require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});