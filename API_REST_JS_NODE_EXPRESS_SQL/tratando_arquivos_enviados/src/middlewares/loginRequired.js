const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Segurança a mais
async function isValidUser(id, email) {
    try {
        const user = await User.findOne({
            where: {
                id,
                email,
            }
        })

        return user !== null;

    } catch {
        return null;
    }
}


module.exports = async (req, res, next) => {
    const { autorization } = req.headers;

    if (!autorization) {
        return res.status(401).json({
            errors: ['Login required.'],
        })
    }

    const [, token] = autorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;

        if ( !await isValidUser(id, email)) {
            return res.status(401).json({
                errors: ['Usuário inválido.'],
            });
        }


        req.userId = id;
        req.userEmail = email;

        return next();
    } catch (err) {
        return res.status(401).json({
            errors: ['Token inválido ou expirado.'],
        })
    }
}