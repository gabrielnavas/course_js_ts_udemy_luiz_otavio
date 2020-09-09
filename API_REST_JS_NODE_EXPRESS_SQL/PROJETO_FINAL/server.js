const dotenv = require('dotenv');
dotenv.config();

const app = require('./app'); 

const port = 3001;

app.listen(port, () => {
    console.log();
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
})