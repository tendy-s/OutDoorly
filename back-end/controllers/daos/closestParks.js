const { getModelForCollection } = require("../../shared/mongoose");
const util = require("util");

async function closestParksfromDB(Parks) {
  const parkIDs = Parks.map((obj) => obj.ParkID);
  console.log(parkIDs);
  const parks = await getModelForCollection("parksSchema");
  let parksResult = await parks.find({ id: { $in: parkIDs } });
  console.log(parksResult);
  // Create a map of ids to parks for quick access
  const idToParkMap = parksResult.reduce((map, park) => {
    map[park.id] = park;
    return map;
  }, {});

  // Sort based on the initial order of IDs
  parksResult = parkIDs.map((id) => idToParkMap[id]);

  return parksResult;

  // console.log(util.inspect(parksResult, { depth: 3 }));
}

module.exports = closestParksfromDB;
