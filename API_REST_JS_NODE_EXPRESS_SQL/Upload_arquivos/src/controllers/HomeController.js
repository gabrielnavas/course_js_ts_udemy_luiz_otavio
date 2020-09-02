class HomeController {
    index = async (req, res) => {

        res.status(201).json({
            tudoCerto: true,
        })
    }
}

module.exports = new HomeController();