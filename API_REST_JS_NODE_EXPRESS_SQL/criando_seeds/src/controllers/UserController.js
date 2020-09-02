const User = require('../models/User');

class UserController {
    store = async (req, res) => {

        try {
            const novoUser = await User.create(req.body)
            const { id, nome, email } = novoUser;
            res.json({ id, nome, email });
        }
        catch (err) {
            const errors = { errors: err.errors.map(err => err.message) };
            return res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
            return res.send(users);
        } catch (err) {
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);

            const { id, nome, email } = user;
            return res.send({ id, nome, email });
        } catch (err) {
            return res.json(null);
        }
    }

    async update(req, res) {
        try {
            if (!req.userId) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                })
            }

            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                })
            }

            const { id, nome, email } = await user.update(req.body);

            return res.send({ id, nome, email });
        } catch (err) {
            return res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }

    async delete(req, res) {
        try {
            if ( !req.userId) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                })
            }

            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                })
            }

            await user.destroy();

            return res.send(true);
        } catch (err) {
            return res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }
}

module.exports = new UserController();