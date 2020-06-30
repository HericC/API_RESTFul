const jwt = require("jsonwebtoken");

module.exports = (id) => {
    if (!id) return res.status(500).json({ auth: false, message: 'Internal Error' });
    return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: parseInt(process.env.SECRET_TIME) });
}
