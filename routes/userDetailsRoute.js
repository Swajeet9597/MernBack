const express = require("express")

const router = express.Router()

const user = require("../controllers/userDetails")
const authToken = require("../middleware/authToken")

router.get('/userDetails',authToken,user.userDetails)



module.exports = router;