const login = async (req, res) => {
    res.status(200).json({
        mensaje: "Endpoint de login disponible"
    });
};

module.exports = {
    login
};