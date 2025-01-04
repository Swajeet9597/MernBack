const express = require("express")
const {postCart,getCart,deleteCart} = require("../controllers/cartControllers");
const authToken = require("../middleware/authToken");

const router = express.Router();


router.post("/cartAdd",authToken,postCart)
router.get("/cartAdd", authToken,getCart)
router.delete("/cartAdd", authToken,deleteCart)

module.exports = router;