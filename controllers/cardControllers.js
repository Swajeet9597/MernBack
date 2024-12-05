
const Card = require("../models/cardModel")

const cardInfo = async(req,res) =>{

    try {
        
    const response = await Card.find()

    if(!response){
        return res.status(400).json({msg:"data not found"})
    }

    res.status(200).json({msg:response})

    
    } catch (error) {
        console.log(error);
    }


}

module.exports = {cardInfo}