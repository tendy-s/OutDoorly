const express = require('express');
const router = express.Router();
// const getParksStateAndActivities = require('../controllers/parksController.js');
const getParksByDistance = require('../controllers/parksByDistanceController.js');
// const getParkDetails = require('../controllers/parksController.js');
const parkController = require('../controllers/parksController.js');


/* root: /parks */

router.get('/', parkController.getParksStateAndActivities);

router.get('/:id', parkController.getParkDetails);

router.get('/distance', getParksByDistance);

module.exports = router;


