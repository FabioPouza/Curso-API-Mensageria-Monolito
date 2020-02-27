const userController = require('../components/user/userController');

module.exports = (app) => {
    app.route('/v1/users')
        .get(userController.getUsers)
        .post(userController.setUser);
}