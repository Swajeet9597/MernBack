
const userDetails = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({
            msg: error,
            error: true,
            success: false
        })
    }
}

module.exports = {userDetails}