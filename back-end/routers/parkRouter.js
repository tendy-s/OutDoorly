const express = require('express');
const router = express.Router();
const getParksStateAndActivities = require('../controllers/parksController.js')

// router.get('/', function (req, res){

//     try{
//         const result = getParksStateAndActivities(req, res);
//         return res.status(201).json(result);
//     }catch (error) {
//         console.log(err);
//         return res.status(500).json({ error: "Internal database error" });
//     }

router.get('/', getParksStateAndActivities);

module.exports = router;


