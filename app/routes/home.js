var Controller = require('../controllers/home');

var controller = Controller();

module.exports = () => {
    app.get('/', controller.index)
    app.get('/sobre', controller.sobre)
    app.post('/', controller.index)
}