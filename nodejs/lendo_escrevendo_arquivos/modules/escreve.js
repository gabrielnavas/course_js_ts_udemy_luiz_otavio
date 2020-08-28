const fs = require('fs').promises;

module.exports = async (path, text, mode='a') => {
    fs.writeFile(path, text, { flag: mode, encoding: 'utf-8' })
        .then()
        .catch(err => {
            throw new Error(err)
        });
};