var express = require('express');
var router = express.Router();
var auth = require('../controllers/UserAuthController');

router.post('/login', auth.doLogin);

router.post('/register', auth.doRegister);

router.post('/logout', auth.logout);

router.get('/', auth.home);

module.exports = router;