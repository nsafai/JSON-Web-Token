var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/signup', function(req, res, next) {
    console.log('trying to access signup page');
    res.render('users/signup', { title: 'Sign Up' });
});


module.exports = router;
