const CandidateController = require("../controllers/candidate.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {

    app.post('/api/candidate', CandidateController.createCandidate);
    app.get('/api/candidate/:id', CandidateController.findOneCandidate);
    app.get('/api/candidates', CandidateController.findAllCandidates);
    app.put('/api/vote/:id', CandidateController.updateCandidate);
    app.put('/edit/candidate/:id', CandidateController.editCandidate);
    app.delete('/api/:id', CandidateController.deleteAnExistingCandidate);
    app.get('/api/winner', CandidateController.findOneWinner);

}
