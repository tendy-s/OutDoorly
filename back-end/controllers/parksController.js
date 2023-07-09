// import { getParks } from "./daos/parks.js";
const DAOS = require("./daos/parks.js");

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

    if (req.query.activities) {
      selectedActivities = req.query.activities;
    }

    if (req.query.amenities) {
      selectedAmenities = req.query.amenities;
    }

    if (req.query.state) {
      selectedState = req.query.state;
    }

    if (req.query.sortBy) {
      sortBy = req.query.sortBy;
    }

    const result = await DAOS.getParks(
      selectedActivities,
      selectedAmenities,
      selectedState,
      sortBy
    );
    console.log(result);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal database error." });
  }
};

const getParkDetails = async (req, res) => {
  console.log(req.params.id);

  if (!req.params.id || req.params.id === ":id") {
    return res.status(400).json({ error: "Id param must be provided." });
  }

  const objId = req.params.id;

  try {
    const result = await DAOS.getParkDetails(objId);
    console.log(result);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal database error." });
  }
};

module.exports = { getParksStateAndActivities, getParkDetails };
