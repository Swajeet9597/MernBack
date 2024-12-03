
// const Exdeal = require("../models/exdealModel")
const Berg = require("../models/bergModel")
const Frie = require("../models/friesModel")
const Colddrink = require("../models/coldDrinksModel")


const getBerg = async(req,res)=>{
    const response = await Berg.find()

    if(!response){
        return res.status(400).json({msg:"not fetching.."})
    }
    // console.log(response)
    res.status(200).json({msg:response})
}

const getFries = async(req,res)=>{
    const response = await Frie.find()

    if(!response){
        return res.status(400).json({msg:"not fetching.."})
    }
    // console.log(response)
    res.status(200).json({msg:response})
}


const getColddrinks = async(req,res)=>{
    const response = await Colddrink.find()

    if(!response){
        return res.status(400).json({msg:"not fetching.."})
    }
    // console.log(response)
    res.status(200).json({msg:response})
}




module.exports = {getBerg,getColddrinks,getFries}