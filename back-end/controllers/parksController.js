// import { getParks } from "./daos/parks.js";
const getParks = require("./daos/parks.js");

// const getParksStateAndActivities = async (req, res) => {
//     const selectedActivities = req.query.activities;
//     const selectedState = req.query.state;

//     if (!selectedActivities || !selectedState){
//       throw new Error("Parameters not defined");
//     }

//     const result = await getParks(selectedActivities, selectedState);
//     return res.status(201).json(result)
//     // return result;
// };

/*  Returns the information associated with parks that contain ALL 
    activities provided AND in the state that is provided 
    
    @param {activities} an array of activities
    @param {state} state code e.g 'CA'
    @returns list of parks
    
*/

const getParksStateAndActivities = async (req, res) => {
  try {

    let selectedActivities;
    let selectedAmenities;
    let selectedState;
    let sortBy;

    if (req.query.activities){
       selectedActivities = req.query.activities;
    }

    if (req.query.selectedAmenities){
       selectedAmenities = req.query.state;
    }

    if (req.query.state){
       state = req.query.state;
    }

    if (req.query.sortBy){
      sortBy = req.query.sortBy;
    }

    const result = await getParks(selectedActivities, selectedAmenities, selectedState, sortBy);
    console.log(result);
  
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal database error." });
  }
};

module.exports = getParksStateAndActivities;
