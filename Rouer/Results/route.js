const express = require("express");
const { resultFunc } = require("../../Controler/Results/controler");
const router = express.Router();


router.get("/",resultFunc);

module.exports = router;