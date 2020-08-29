module.exports = (req,res,next) => {
    console.log('Sou outro midleware :)');
    next();
}