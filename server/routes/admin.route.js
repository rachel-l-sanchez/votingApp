const AdminController = require('../controllers/admin.controller');
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post('/api/admin/register', AdminController.registerAdmin);
    app.post('/api/admin/login', AdminController.loginAdmin);
    app.get('/api/admin/logout', AdminController.logoutAdmin);

}