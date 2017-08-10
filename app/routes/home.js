var Controller = require('../controllers/home');

var controller = Controller();

module.exports = () => {
    app.get('/', controller.index)
}