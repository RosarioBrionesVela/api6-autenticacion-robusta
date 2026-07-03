const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        mensaje: "Demasiados intentos desde esta IP. Intente nuevamente en 15 minutos."
    }
});

module.exports = loginLimiter;