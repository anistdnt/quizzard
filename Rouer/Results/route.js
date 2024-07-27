const express = require("express");
const router = express.Router();
const {resultFunc} = require("../../Controler/Results/controler")

router.get("/",resultFunc);

module.exports = router;