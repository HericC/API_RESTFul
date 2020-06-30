const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers[process.env.SECRET_HEADER];

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });
        req.user = user;
        next();
    });
}
