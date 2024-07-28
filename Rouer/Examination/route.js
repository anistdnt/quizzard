const express = require("express");
const router = express.Router();
const {examFunc,examPostFunc} = require("../../Controler/Examination/controler")

router.get("/",examFunc);

router.post("/",examPostFunc);

module.exports = router;