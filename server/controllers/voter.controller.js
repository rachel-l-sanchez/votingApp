const Voter = require('../models/voter.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




module.exports = {
    registerVoter: (req, res) => {
        const {firstName, lastName, email, password} = req.body
        const newVoter = Voter.create(req.body)
        .then(voter => {
            const voterToken = jwt.sign({
                id: newVoter._id, email
            }, SECRET);
            res.status(201).cookie("userToken", voterToken, {
                httpOnly: true,expires: new Date(Date.now() + 90000)})
                .json({successMessage: 'User registered', newVoter: newVoter})
            })
        .catch(err => res.json(err));
    },
    loginVoter:async (req, res)=> {
        const voterInDB = await Voter.findOne({email:req.body.email})
        if(!voterInDB) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
        try {
            const isPasswordValid = await bcrypt.compare(req.body.password, voterInDB.password)
            console.log(isPasswordValid)
            if(!isPasswordValid) {
                res.status(400).json({error: "Invalid email/password combination"})
            }else {
                const voterToken = jwt.sign({_id: voterInDB._id, email:voterInDB.email}, SECRET)
                res.status(201).cookie('voterToken', voterToken, {httpOnly:true, 
                    expires: new Date(Date.now() + 90000)}).json({successMessage: 'User logged in',
                     voterInDB: voterInDB})
            }
        }catch(err) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
    },
    logoutVoter: (req, res)=> {
        res.clearCookie('userToken')
        res.json({success: 'User logged out'})
    }
}



