const express = require("express")
const router = express.Router();

const {getAdd,postAdd} = require("../controllers/addressControllers") 


// router.post("/cartAdd", postCart)
router.get("/address", getAdd)
router.post("/address", postAdd)

module.exports = router;