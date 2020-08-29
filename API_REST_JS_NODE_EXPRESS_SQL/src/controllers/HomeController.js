class HomeController {
    index = (req, res) => {
        res.status(500).json({
            tudoCerto: true,
        })
    }
}

module.exports = new HomeController();