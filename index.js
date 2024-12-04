require("dotenv").config();
const express = require("express")
const app = express();
const port = process.env.PORT;
const connectDB = require("./config/db")
const router = require("./routes/userRoutes")
const homeRouter = require("./routes/homePageDataRoute")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")
const orderRouter = require("./routes/addressRoutes")
const cors = require("cors");

const corsOption = {
    origin: "https://mern-front-xi.vercel.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOption))

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
app.use(express.json());
app.use("/api/auth/", router);
app.use("/api/data/", homeRouter);
app.use("/api/data/", productRouter);
app.use("/api/product/", cartRouter);
app.use("/api/order/", orderRouter);


connectDB(); 

