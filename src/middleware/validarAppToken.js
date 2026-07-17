const jwt = require("jsonwebtoken");

const validarAppToken = (req, res, next) => {

    const token = req.header("app-token");

    if (!token) {
        return res.status(401).json({
            mensaje: "Application token requerido"
        });
    }

    try {

        jwt.verify(token, process.env.APP_TOKEN_SECRET);

        next();

    } catch (error) {

        return res.status(401).json({
            mensaje: "Application token inválido"
        });

    }

};

module.exports = validarAppToken;