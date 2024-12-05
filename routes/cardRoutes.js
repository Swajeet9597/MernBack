const express = require("express")

const router = express.Router();


const auth = require("../controllers/cardControllers")


router.get("/cardInfo", auth.cardInfo)






module.exports = router;