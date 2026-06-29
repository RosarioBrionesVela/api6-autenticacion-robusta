const express = require("express");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API 6 - Autenticación Robusta"
    });
});

app.use("/api/v2/auth", authRoutes);

module.exports = app;