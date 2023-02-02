const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name:
     { type: String,required: [
        true,
        "Name is required"
    ] },
    pastTermStartDate:
     {type: Date,required: [
        true,
        "Start Date is required"
    ]},
    pastTermEndDate:
    {type: Date,required: [
       true,
       "End Date is required"
   ]},
    party:
     { type: String,required: [
        true,
        "Party is required"
    ] },
    stance:
     {type: String,required: [
        true,
        "Stance is required"
    ]},
    experience:
     {type: String,required: [
        true,
        "Experience is required"
    ]},
    voteCount: {
        type: Number
    },
    headshot: {
        type: String, required: [true, "Headshot required"]
    }
}, { timestamps: true });


module.exports = mongoose.model('Candidate', CandidateSchema);

