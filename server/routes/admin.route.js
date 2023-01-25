const AdminController = require('../controllers/admin.controller');


module.exports = (app) => {
    app.post('/api/admin/register', AdminController.registerAdmin);
    app.post('/api/admin/login', AdminController.loginAdmin);
    app.get('/api/admin/logout', AdminController.logoutAdmin);

}