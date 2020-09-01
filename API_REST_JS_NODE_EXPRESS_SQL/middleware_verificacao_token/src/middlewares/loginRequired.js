const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { autorization } = req.headers;

    if( !autorization) {
        return res.status(401).json({
            errors: ['Login required.'],
        })
    }

    const [, token] = autorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;
        
        req.userId = id;
        req.userEmail = email;

        return next();
    } catch(err) {
        return res.status(401).json({
            errors: ['Token inválido ou expirado.'],
        })
    }
}