const express = require('express');
const router = express.Router();

// stylesheets sent to layout.hbs
const stylesheets = [
  { stylesheet: '/public/stylesheets/simple-sidebar.css' }];


/* GET addcase page */
router.get('/', function(req, res, next) {
  res.render('addcase', {
    title: 'Add Case',
    stylesheets: stylesheets
  });
});

module.exports = router;
