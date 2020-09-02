

class FotoController {
    store = async (req, res) => {
        res.status(201).json(req.file);
    }
}

module.exports = new FotoController();