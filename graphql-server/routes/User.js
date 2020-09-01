const express = require('express');
const router = express.Router();

const User = require('../controllers/User');

router.post('/signup',  User.signup);
router.post('/signin',  User.signin);

let UserRouter = router
module.exports = UserRouter;
