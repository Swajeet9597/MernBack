const mongoose = require("mongoose")

const ColddrinkSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    }
})




const Colddrink = new mongoose.model("Colddrink", ColddrinkSchema);

module.exports = Colddrink;