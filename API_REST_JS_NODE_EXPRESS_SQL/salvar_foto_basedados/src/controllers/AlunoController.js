const Aluno = require('../models/Aluno');

class AlunoController {

    store = async (req, res) => {
        try {
            console.log(req.body);
            const aluno = await Aluno.create(req.body);

            return res.json(aluno);
        }
        catch (err) {
            return res.status(400).json({
                errors: err.errors.map(err => err.message),
            });
        }
    }

    index = async (req, res) => {
        const alunos = await Aluno.findAll();
        return res.send(alunos);
    }

    show = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno not found.'],
                });
            }

            return res.json(aluno);
        }
        catch (err) {
            return res.status(400).json({
                errors: err.errors.map(err => err.message),
            });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno not found.'],
                });
            }

            const alunoAtualizado = await aluno.update(req.body);

            return res.json(alunoAtualizado);
        }
        catch (err) {
            return res.status(400).json({
                errors: err.errors.map(err => err.message),
            });
        }
    }


    delete = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ['Missing ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno not found.'],
                });
            }

            await aluno.destroy();
            return res.json({
                apagado: true,
            });
        }
        catch (err) {
            return res.status(400).json({
                errors: err.errors.map(err => err.message),
            });
        }
    }
}

module.exports = new AlunoController();