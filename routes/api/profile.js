const express = require('express');
const router = express.Router();

//@route        GET api/profile
//@description  Test route
//@access       PUBLIC

router.get('/',(req,res) => res.send('Profile route'));

module.exports = router;