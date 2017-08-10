module.exports = () => {

    var controller = {};

    controller.index = (req, res) => {
        res.render('index', { nome: 'Boomerang' });
    }
    
    return controller;
}