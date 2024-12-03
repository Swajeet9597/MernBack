const mongoose = require("mongoose")


const URI = process.env.MONGODB_URI;


async function connectDB () {
    await mongoose.connect(URI)
    .then(()=>console.log("Database connected...."))
    .catch((err)=>console.log(err))
}


module.exports = connectDB;