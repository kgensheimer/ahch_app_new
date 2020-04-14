const express = require('express');
const router = express.Router();

// stylesheets sent to layout.hbs
const stylesheets = [
  { stylesheet: '/public/css/sidebar-menu.css' }];


/* GET addcase page */
router.get('/', async (req, res, next) => {
  res.render('addcase', {
    title: 'Add Case',
    stylesheets: stylesheets
  });
});

router.post('/submitIntake', async (req, res) =>{
  console.log(req.body);
});

module.exports = router;
