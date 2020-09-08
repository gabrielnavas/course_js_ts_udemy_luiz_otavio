const User = require('../models/User');
const jwt = require('jsonwebtoken');

class TokenController {
    store = async (req, res) => {

        const { email = '', password = '' } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                errors: ['Credenciais inválidas.'],
            });
        }

        try {
            const user = await User.findOne({ where: { email, } });

            if (!user) {
                return res.status(401).json({
                    errors: ['Usuário não existe.'],
                });
            }

            const isValid = await user.passwordIsValid(password)

            if (!isValid) {
                return res.status(401).json({
                    errors: ['Senha inválida.']
                });
            }

            const { id } = user;
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            });

            return res.json({
                token, user: {
                    nome: user.nome, id, email
                }
            });
        }
        catch (e) {

        }


        return res.json(null);
    }
}

module.exports = new TokenController();