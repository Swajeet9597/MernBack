const express = require("express")
const {postCart,getCart,deleteCart} = require("../controllers/cartControllers");
const authToken = require("../middleware/authToken");

const router = express.Router();


router.post("/cartAdd",authToken,postCart)
router.get("/cartAdd", getCart)
router.delete("/cartAdd", deleteCart)

module.exports = router;