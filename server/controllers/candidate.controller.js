const Candidate = require("../models/candidate.model");
const Voter = require("../models/voter.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

module.exports = {
  createCandidate: (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Candidate.create({ ...req.body, userCreated: user })
      .then((newCandidate) => {
        console.log("Candidate successfully created", newCandidate);
        res.json(newCandidate);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  findOneCandidate: (req, res) => {
    Candidate.findById(req.params.id)
      .then((oneCandidate) => {
        res.json({ candidate: oneCandidate });
      })
      .catch((err) => response.status(400).json(err));
  },

  findAllCandidates: (req, res) => {
    Candidate.find()
      .then((allCandidates) => {
        res.json(allCandidates);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //Using updateCandidate for edit page
  updateCandidate: (req, res) => {
    Candidate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedCandidate) => res.json(updatedCandidate))
      .catch((err) => res.status(400).json(err));
  },

  editCandidate: (req, res) => {
    Candidate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
  findOneWinner: (req, res) => {
    Candidate.findByCounter(req.params.counter)
      .then((result) => {
        res.json({ result });
      })
      .catch((err) => response.status(400).json(err));
  },
  deleteAnExistingCandidate: (req, res) => {
    Candidate.deleteOne({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
