const express = require("express");
const router = express.Router();
const {startquizFunc} = require("../../Controler/Startquiz/controler")

router.get("/",startquizFunc);

module.exports = router;