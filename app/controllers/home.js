module.exports = () => {

    var controller = {};

    controller.index = (req, res) => {
        res.render('index', { nome: 'Boomerang' });
    }

    controller.sobre = (req, res) => {
        res.render('sobre', { nome: 'Teste' });
    }

    return controller;
}