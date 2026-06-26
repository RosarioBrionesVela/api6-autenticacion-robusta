const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API 6 - Autenticación Robusta"
    });
});

module.exports = app;