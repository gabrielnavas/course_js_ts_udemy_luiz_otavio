const User = require('../models/User');

class UserController {
    store = async (req, res) => {

        try {
            const novoUser = await User.create(req.body)

            res.json(novoUser);
        }
        catch (err) {
            const errors = { errors: err.errors.map(err => err.message) };
            return res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.send(users);
        } catch (err) {
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const users = await User.findByPk(id);
            return res.send(users);
        } catch (err) {
            return res.json(null);
        }
    }

    async update(req, res) {
        try {
            const id = Number(req.params.id);

            if( !id) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                })
            }
            
            const user = await User.findByPk(id);

            if( !user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                })
            }

            const novosDados = await user.update(req.body);

            return res.send(novosDados);
        } catch (err) {
            return res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }

    async delete(req, res) {
        try {
            const id = Number(req.params.id);

            if( !id) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                })
            }
            
            const user = await User.findByPk(id);

            if( !user) {
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