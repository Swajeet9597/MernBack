const mongoose = require("mongoose")

const FrieSchema = new mongoose.Schema({
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




const Frie = new mongoose.model("Frie", FrieSchema);

module.exports = Frie;