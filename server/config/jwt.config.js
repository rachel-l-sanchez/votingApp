const jwt = require('jsonwebtoken')
const SECRET =process.env.SECRET

// module.exports.authenticate = (req,res,next)=> {
//     console.log("cookies", req.cookies)
//     jwt.verify(req.cookies.adminToken, SECRET, (err,payload)=> {
//         if(err){
//             console.log('authentication failed')
//             res.status(401).json({verified:false})   
//         }else{
//             console.log('authentication success')
//             next()
//         }
//     })

// }