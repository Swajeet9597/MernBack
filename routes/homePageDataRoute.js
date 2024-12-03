const express = require("express")

const router = express.Router();

const imgData = require("../controllers/homePageDataControllers") 

router.get('/exdeal',imgData.getExdeal)

module.exports = router;