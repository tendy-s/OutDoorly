import { getParks } from "./daos/parks.js";

async function getParksStateAndActivities(req, res) {
  try {
    const selectedActivities = req.query.activities;
    const selectedState = req.query.state;

    const result = await getParks(selectedActivities, selectedState);

    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal database error" });
  }
}
