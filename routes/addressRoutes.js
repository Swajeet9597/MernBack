const express = require("express")
const router = express.Router();

const {getAdd,postAdd,deleteAdd} = require("../controllers/addressControllers") 


// router.post("/cartAdd", postCart)
router.get("/address", getAdd)
router.post("/address", postAdd)
router.post("/address", deleteAdd)

module.exports = router;