const User = require("../models/userModel")



const userDetails = async(req,res)=>{
    try {
        console.log("ssssssssssggggggg")
        const userID = req.user;

        const user = await User.findById(userID)

        res.status(201).json({
            msg:"correct++++",
            data: user
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