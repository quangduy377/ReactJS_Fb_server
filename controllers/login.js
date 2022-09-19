const User = require('../models/user')
exports.login = (req,res,next)=>{
    User.findOne({email: req.body.userName})
    .then(user=>{
        if(user){
            console.log(user)
            res.status(200).json({message:"connect user successfully", authorized: true})
        }
        else{
            res.status(200).json({message:"connect user failed", authorized: false})
        }
    })
    .catch(err=>console.log(err))
}