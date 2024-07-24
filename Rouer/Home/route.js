const express = require("express");
const router = express.Router();
const {homeFunc} = require("../../Controler/Home/controler")

router.get("/",homeFunc);

module.exports = router;