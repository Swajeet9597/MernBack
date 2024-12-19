const jwt = require("jsonwebtoken")
const userDetails = async(req,res)=>{
    try {
        console.log("ssssssssssggggggg")
        const token = req.token;
        const user = req.user;
        res.status(201).json({
            msg:"correct++++",
            data: token,
            info: user
        })
    } catch (error) {
        res.status(402).json({
            msg: error,
            error: true,
            success: false
        })
    }
}

module.exports = {userDetails}