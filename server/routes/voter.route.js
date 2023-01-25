const VoterController = require('../controllers/voter.controller');


module.exports = (app) => {
    app.post('/api/register', VoterController.registerVoter);
    app.post('/api/login', VoterController.loginVoter);
    app.get('/api/logout', VoterController.logoutVoter);

}