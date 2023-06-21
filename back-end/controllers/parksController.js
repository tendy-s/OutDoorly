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

const getParksStateAndActivities = async (req, res) => {
  try {
    const selectedActivities = req.query.activities;
    const selectedState = req.query.state;

    const result = await getParks(selectedActivities, selectedState);
    console.log(result);
  
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal database error" });
  }
};

module.exports = getParksStateAndActivities;
