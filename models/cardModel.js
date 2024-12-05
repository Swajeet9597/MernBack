const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },

})




const Card = new mongoose.model("Card", cardSchema);

module.exports = Card;