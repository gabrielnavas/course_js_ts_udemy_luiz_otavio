const Aluno = require('../models/Aluno');
const Foto = require('../models/Foto');

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
        const alunos = await Aluno.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
            order: [['id', 'DESC'], [Foto, 'id', 'DESC']], //ordem decrescente
            include: {
                model: Foto,
                attributes: ['url', 'filename'],
            }
        });
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

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']], //ordem decrescente
                include: {
                    model: Foto,
                    attributes: ['url', 'filename'],
                }
            });

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