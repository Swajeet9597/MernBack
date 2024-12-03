const express = require("express")

const router = express.Router();

// const auth = require("../controllers/userControllers")

const auth = require("../controllers/productControllers")

router.get("/burger", auth.getBerg )
router.get("/fries", auth.getFries )
router.get("/colddrinks", auth.getColddrinks )




module.exports = router;