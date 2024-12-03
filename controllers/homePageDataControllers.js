
const Exdeal = require("../models/exdealModel")

const getExdeal = async(req,res)=>{
    const response = await Exdeal.find()

    if(!response){
        return res.status(400).json({msg:"not fetching.."})
    }
    // console.log(response)
    res.status(200).json({msg:response})
}

module.exports = {getExdeal}