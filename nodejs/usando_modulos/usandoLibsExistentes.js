const { default: Axios } = require("axios");

Axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(r => console.log(r.data));