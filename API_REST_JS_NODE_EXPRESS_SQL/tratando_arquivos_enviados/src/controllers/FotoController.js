const multer = require('multer');
const multerConfig = require('../config/multerConfig');

const upload = multer(multerConfig).single('foto');

class FotoController {
    store = async (req, res) => {
        return upload(req,res, err => {
            if(err) {
                return res.status(400).json({
                    erros: [err.code],
                })
            }

            return res.json(req.file);
        });
    }
}

module.exports = new FotoController();