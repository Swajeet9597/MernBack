const mongoose = require("mongoose")

const bergSchema = new mongoose.Schema({
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




const Berg = new mongoose.model("Berg", bergSchema);

module.exports = Berg;