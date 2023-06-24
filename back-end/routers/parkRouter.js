const express = require('express');
const router = express.Router();
const getParksStateAndActivities = require('../controllers/parksController.js')
const getParksByDistance = require('../controllers/parksByDistanceController.js')



router.get('/', getParksStateAndActivities);

router.get('/distance', getParksByDistance);

module.exports = router;


