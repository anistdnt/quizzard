const express = require("express");
const { signupFunc,signupPostFunc } = require("../../Controler/Signup/controler");
const router = express.Router();


router.get("/",signupFunc);

router.post('/',signupPostFunc);

module.exports = router;