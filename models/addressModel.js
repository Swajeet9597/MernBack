const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },

})




const Address = new mongoose.model("Address", addressSchema);

module.exports = Address;