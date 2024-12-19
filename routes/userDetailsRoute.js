const express = require("express")

const router = express.Router()

const {userDetails} = require("../controllers/userDetails")
const authToken = require("../middleware/authToken")

router.get('/userDetails',authToken,userDetails)



module.exports = router;