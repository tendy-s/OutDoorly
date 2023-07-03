const express = require("express");
const router = express.Router();
// const getParksStateAndActivities = require('../controllers/parksController.js');
const getParksByDistance = require("../controllers/parksByDistanceController.js");
// const getParkDetails = require('../controllers/parksController.js');
const parkController = require("../controllers/parksController.js");
const review = require("../controllers/reviewController.js");

/* root: /parks */

router.get("/", parkController.getParksStateAndActivities);

router.get("/distance", getParksByDistance);

router.get("/review/:id", review.getReview);
router.post("/review/:id", review.addReview);
router.put("/review/:id", review.updateReview);
router.delete("/review/:id", review.deleteReview);

router.get("/:id", parkController.getParkDetails);

module.exports = router;
