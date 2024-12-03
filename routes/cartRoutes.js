const express = require("express")
const {postCart,getCart,deleteCart} = require("../controllers/cartControllers")

const router = express.Router();


router.post("/cartAdd", postCart)
router.get("/cartAdd", getCart)
router.delete("/cartAdd", deleteCart)

module.exports = router;