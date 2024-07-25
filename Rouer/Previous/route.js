const express = require("express");
const router = express.Router();
const {prevFunc} = require("../../Controler/Previous/controler")

router.get("/",prevFunc);

module.exports = router;