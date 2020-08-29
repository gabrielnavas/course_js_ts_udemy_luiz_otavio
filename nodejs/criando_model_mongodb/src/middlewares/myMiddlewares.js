module.exports = (req, res, next) => {
    console.log('passei no meu middleware');
    next();
}