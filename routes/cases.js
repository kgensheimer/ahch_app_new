const express = require('express');
const router = express.Router();

/* GET cases page */
router.get('/', function (req, res, next) {
  res.render('cases/case', {
    title: 'Cases',
    layout: 'cases'
  });
});

router.get('/referral', function (req, res, next) {
  res.render('cases/referral', {
    title: 'Case Referrals',
    layout: 'cases'
  });
});

router.get('/patients', function (req, res, next) {
  res.render('cases/patients', {
    title: 'Case Patients',
    layout: 'cases'
  });
});

router.get('/medical', function (req, res, next) {
  res.render('cases/medical', {
    title: 'Case Medical',
    layout: 'cases'
  });
});

router.get('/family', function (req, res, next) {
  res.render('cases/family', {
    title: 'Case Family',
    layout: 'cases'
  });
});

router.get('/history', function (req, res, next) {
  res.render('cases/history', {
    title: 'Case History',
    layout: 'cases'
  });
});

router.get('/services', function (req, res, next) {
  res.render('cases/services', {
    title: 'Case Services',
    layout: 'cases'
  });
});

router.get('/staff', function (req, res, next) {
  res.render('cases/staff', {
    title: 'Case Staff',
    layout: 'cases'
  });
});

router.get('/mentalhealth', function (req, res, next) {
  res.render('cases/mentalhealth', {
    title: 'Case Mental Health',
    layout: 'cases'
  });
});

router.get('/recommendation', function (req, res, next) {
  res.render('cases/recommendation', {
    title: 'Case Recommendation',
    layout: 'cases'
  });
});

router.get('/familyrecommendation', function (req, res, next) {
  res.render('cases/familyrecommendation', {
    title: 'Case Family Recommendation',
    layout: 'cases'
  });
});

router.get('/notes', function (req, res, next) {
  res.render('cases/notes', {
    title: 'Case Notes',
    layout: 'cases'
  });
});

module.exports = router;
