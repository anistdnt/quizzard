const express = require("express");
const router = express.Router();
const {startquizFunc,startquizPostFunc} = require("../../Controler/Startquiz/controler")

router.get("/",startquizFunc);

router.post("/",startquizPostFunc)

module.exports = router;