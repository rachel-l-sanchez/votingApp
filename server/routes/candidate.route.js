const CandidateController = require("../controllers/candidate.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/candidate", authenticate, CandidateController.createCandidate);

  app.get(
    "/api/candidate/:id", authenticate, CandidateController.findOneCandidate
  );
  app.get(
    "/api/candidates", authenticate, CandidateController.findAllCandidates
  );
  app.put("/api/vote/:id", authenticate, CandidateController.updateCandidate);
  app.put("/api/vote/:id", authenticate, CandidateController.updateCandidate);
  app.put(
    "/edit/candidate/:id",
    authenticate,
    CandidateController.editCandidate
  );
  app.delete(
    "/api/:id",
    authenticate,
    CandidateController.deleteAnExistingCandidate
  );
  app.get("/api/winner", authenticate, CandidateController.findOneWinner);
};
