const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    firstName:{ 
        type: String,
        required: [true, "First Name is required"]
    },
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
    // privileges: {
    //     type: Boolean, required: [
    //         true,
    //         'Privilege type is required'
    // ]},
    password: {
        type: String, required:
        [true,'Password field is required'], 
    minLength: [8, "This Field must be at least 8 characters long"],
    maxLength: [12, "This must be less than 12 characters long"]}
}, { timestamps: true });



// hashes password
AdminSchema.pre('save',async function(next){
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

AdminSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword= value)
.set(value=>this._confirmPassword = value)

AdminSchema.pre('validate', function(next) {
    if(this.password!==this.confirmPassword) {
        this.invalidate('confirmPassword','Password must match confirm password')
    }
    next()
})
 

// MongoDB schema provides virtual
// short term value
// AdminSchema.virtual('confirmPassword')
//     .get( () => this._confirmPassword )
//     .set( e => this._confirmPassword = e );
// // pre or post middlewear
// AdminSchema.pre('validate', function(next){
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Passwords must match💜💜!!')
//     }
//     // otherwise call next middlewear
//     // alwasy call next middlewear
//     next()
// })

// // check confirm email
// AdminSchema.virtual('confirmEmail')
//     .get( () => this._confirmEmail )
//     .set( e => this._confirmEmail = e);
// AdminSchema.pre('validate', function(next){
//     if (this.email !== this.confirmEmail) {
//         this.invalidate('confirmEmail', 'Emails must match💜💜!!')
//     }
//     next()
// })


// SAVE ENCRYPTED PASSWORD
// AdminSchema.pre('save', async function (next) {
//     try {
//         // hash the password, 10 times
//         const hashedPassword = await bcrypt.hash(this.password, 10)
//         // update password with hashed password
//         this.password = hashedPassword
//         next()
//     } catch (err) {
//         console.log('ERROR IN SAVE: ', err)
//     }
// })

module.exports = mongoose.model('Admin', AdminSchema);