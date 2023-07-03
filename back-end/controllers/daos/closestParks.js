const { getModelForCollection } = require("../../shared/mongoose");
const util = require("util");

async function closestParksfromDB(Parks) {
  const parkIDs = Parks.map((obj) => obj.ParkID);
  console.log(parkIDs);
  const parks = await getModelForCollection("parksSchema");
  const parksResult = await parks.find({ id: { $in: parkIDs } });
  return parksResult;
  // console.log(util.inspect(parksResult, { depth: 3 }));
}

module.exports = closestParksfromDB;
