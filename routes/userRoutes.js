const express = require("express")

const router = express.Router();

const auth = require("../controllers/userControllers")

router.post("/signup", auth.dataDbSave)

router.post("/login",auth.dataCompare)




module.exports = router;