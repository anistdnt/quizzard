const express = require('express')
const router = express.Router()
const homepage = require('../../Controler/Home/controler')

router.get('/',homepage)

module.exports = router;