const mongoose = require("mongoose")

const exdealSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true
    }
})




const Exdeal = new mongoose.model("Exdeal", exdealSchema);

module.exports = Exdeal;