const express = require("express");
const router = express.Router();
const {examFunc} = require("../../Controler/Examination/controler")

router.get("/",examFunc);

module.exports = router;