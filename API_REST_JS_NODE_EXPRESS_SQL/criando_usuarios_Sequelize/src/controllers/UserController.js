const User = require('../models/User');

class UserController {
    store = async (req, res) => {

        try {
            console.log(req.body);
            const novoUser = await User.create(req.body)

            res.json(novoUser);
        }
        catch (err) {
            console.log();
            console.log();
            const errors = { errors: err.errors.map(err => err.message) };
            console.log(errors);
            res.status(400)
                .json({ errors: err.errors.map(err => err.message) });
        }
    }
}

module.exports = new UserController();