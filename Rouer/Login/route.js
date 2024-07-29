const express = require("express");
const { loginFunc,loginPostFunc } = require("../../Controler/Login/controler");
const router = express.Router();


router.get("/",loginFunc);

router.post("/",loginPostFunc);

module.exports = router;