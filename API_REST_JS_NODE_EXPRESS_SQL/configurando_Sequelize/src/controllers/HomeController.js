const Aluno = require('../models/Aluno');

class HomeController {
    index = async (req, res) => {

        const novoAluno = await Aluno.create({
            nome: 'Gabriel',
            sobrenome: 'Navas',
            email: 'gabriel@gmail.com',
            idade: 44,
            peso: 79,
            altura: 180,
        })

        res.status(201).json({
            tudoCerto: true,
            novoAluno,
        })
    }
}

module.exports = new HomeController();