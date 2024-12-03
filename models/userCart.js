const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const Cart = new mongoose.model("Cart",cartSchema)


module.exports = Cart;