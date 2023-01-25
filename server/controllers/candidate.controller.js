const Candidate = require('../models/candidate.model');

module.exports = {
    createCandidate:(req, res) => {
        Candidate.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
    findOneCandidate: (req, res) => {
        Candidate.findById(req.params.id )
            .then(result => {
                res.json({result})
            })
            .catch(err => response.status(400).json(err))
    
    },
    findAllCandidates: (req, res) => {
        Candidate.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    updateCandidate: (req,res) => {
        Candidate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((result) => res.json(result))
        .catch(err => res.status(400).json(err))
    },
    editCandidate: (req,res) => {
        Candidate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((result) => res.json(result))
        .catch(err => res.status(400).json(err))
    },
    findOneWinner: (req, res) => {
        Candidate.findByCounter(req.params.counter )
            .then((result) => {
                res.json({result})
            })
            .catch(err => response.status(400).json(err))
    },
    deleteAnExistingCandidate: (req, res) => {
        Candidate.deleteOne( {_id : req.params.id} )
        .then( result=> res.json(result) )
        .catch(err => res.status(400).json(err))
    }
}
