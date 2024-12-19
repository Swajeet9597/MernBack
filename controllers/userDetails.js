const jwt = require("jsonwebtoken")
const userDetails = async(req,res)=>{
    try {
        console.log("ssssssssssggggggg")
        const token = req.token;
        res.status(201).json({
            msg:"correct-----",
            data: token
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