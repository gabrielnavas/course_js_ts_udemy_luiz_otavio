// ESSE CÒDIGO ENTRA NUM DIRETORIO E PRINTA SOMENTE OS DIRETORIOS.


const fs = require('fs').promises;
const path = require('path');

function checkFiltros(fileFullPath, filters) {
    let isFilter = false;
    for (let filter of filters) {
        if (filter.test(fileFullPath)) {
            isFilter = true;
            break;
        }
    }

    return isFilter;
}

async function readdir(rootDir, filters) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    await walk(files, rootDir, filters);
}


async function walk(files, rootDir, filters) {

    for (let file of files) {

        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        const isFilter = checkFiltros(fileFullPath, filters);

        if (!isFilter) {
            if (stats.isDirectory()) {
                readdir(fileFullPath);
            } else {
                console.log(file, stats.isDirectory());
            }
        }
    }
}


readdir('/home/navas/Desktop/course_js_ts_udemy_luiz_otavio', [/node_modules/g, /\.git/g]);



