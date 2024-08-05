const express = require("express");
const router = express.Router();
const {notfoundFunc} = require("../../Controler/NotFound/controler")

router.get("/",notfoundFunc);

module.exports = router;