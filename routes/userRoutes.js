const express = require("express")

const router = express.Router();

const auth = require("../controllers/userControllers");
const authToken = require("../middleware/authToken");

router.post("/signup", auth.dataDbSave)

router.post("/login",auth.dataCompare)

router.post("/user",auth.getData)

router.put("/useredit", auth.editUser)

router.get("/checkLogin",authToken,auth.checkLogin)



module.exports = router;