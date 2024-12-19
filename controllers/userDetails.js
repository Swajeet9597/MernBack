const jwt = require("jsonwebtoken")
const userDetails = async(req,res)=>{
    try {
        console.log("ssssssssssggggggg")
        res.status(201).json({msg:"correct????"})
    } catch (error) {
        res.status(402).json({
            msg: error,
            error: true,
            success: false
        })
    }
}

module.exports = {userDetails}