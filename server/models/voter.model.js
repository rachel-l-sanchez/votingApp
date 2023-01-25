const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const VoterSchema = new mongoose.Schema({
    firstName:
     { type: String,required: [
        true,
        "First Name is required"
    ] },
    lastName:{
        type: String, required: [
        true,
        "Last Name is required"
    ] },
    email :{
        type: String,required: [
        true,
        "Email is required"
    ]},
    password: {
        type: String, required:
        [true,'Password field is required'], 
    minLength: [8, "This Field must be at least 8 characters long"],
    maxLength: [12, "This must be less than 12 characters long"]}
}, { timestamps: true });


module.exports = mongoose.model('Voter', VoterSchema);

// hashes password
VoterSchema.pre('save',async function(next){
    try {
        // 10 is number of times to salt password
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log('hashed password', hashedPassword)
        this.password = hashedPassword
        next()
    } catch {
        console.log('Error in save', error)
    }
})

VoterSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword= value)
.set(value=>this._confirmPassword = value)

VoterSchema.pre('validate', function(next) {
    if(this.password!==this.confirmPassword) {
        this.invalidate('confirmPassword','Password must match confirm password')
    }
    next()
})
 