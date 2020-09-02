const multer = require('multer');
const { extname, resolve } = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

module.exports = {
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            const pathUpload = resolve(__dirname, '..', '..', 'uploads');
            callback(null, pathUpload);
        },
        filename: (req, file, callback) => {
            const data = Date.now();
            const extension = extname(file.originalname);
            const numberRandom = aleatorio();
            const newNameFile = `${data}_${numberRandom}${extension}`;

            callback(null, newNameFile);
        },
    }),
};