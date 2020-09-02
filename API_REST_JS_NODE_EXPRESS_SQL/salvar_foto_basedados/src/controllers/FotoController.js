const multer = require('multer');
const multerConfig = require('../config/multerConfig');

const Foto = require('../models/Foto');
const Aluno = require('../models/Aluno');

const upload = multer(multerConfig).single('foto');

class FotoController {
    store = (req, res) => {
        return upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    errors: [err.code],
                });
            }

            const { originalname, filename } = req.file;
            const aluno = await Aluno.findByPk(req.body.aluno_id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Missing a Aluno.'],
                })
            }

            const foto = await Foto.create({ originalname, filename, aluno_id: req.body.aluno_id });

            return res.json(foto);
        });
    }
}

module.exports = new FotoController();