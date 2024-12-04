const express = require("express")

const router = express.Router();

const auth = require("../controllers/userControllers")

router.post("/signup", auth.dataDbSave)

router.post("/login",auth.dataCompare)

router.post("/user",auth.getData)

router.post("/useredit", auth.editUser)




module.exports = router;