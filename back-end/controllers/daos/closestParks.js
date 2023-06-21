const { getModelForCollection } = require("../../shared/mongoose");
// import { getModelForCollection } from "../../shared/mongoose.js";
// import util from "util";
const util = require("util");

async function closestParksfromDB(Parks) {
  const parkIDs = Parks.map((obj) => obj.ParkID);
  console.log(parkIDs);
  const parks = await getModelForCollection("parksSchema");
  console.log(parks);
  const parksResult = await parks.find({ id: { $in: parkIDs } });
  // .select("fullName states");
  return parksResult;
  // console.log(util.inspect(parksResult, { depth: 3 }));
}

module.exports = closestParksfromDB;

// closestParksfromDB([
//   {
//     distance: 409.840093877349,
//     ParkID: "36240051-018E-4915-B6EA-3F1A7F24FBE4",
//     ParkName: "Arches National Park",
//   },
//   {
//     distance: 411.0522777545385,
//     ParkID: "BE3A981E-BB55-474D-8A0E-D711408682DC",
//     ParkName: "Mesa Verde National Park",
//   },
//   {
//     distance: 417.26866531127547,
//     ParkID: "CD54150B-24F6-4B96-8D6F-B23AF92A70F2",
//     ParkName: "Aztec Ruins National Monument",
//   },
//   {
//     distance: 424.4214865197381,
//     ParkID: "B39C368F-CB27-49EC-B2A9-E6C1552430FB",
//     ParkName: "California National Historic Trail",
//   },
//   {
//     distance: 424.7640732448202,
//     ParkID: "9854D136-AFC0-4966-BB40-FE9323B56A49",
//     ParkName: "Yucca House National Monument",
//   },
//   {
//     distance: 430.1208296185441,
//     ParkID: "FB1AE18D-522F-434B-9983-3D0194CE1995",
//     ParkName: "Fort Union National Monument",
//   },
//   {
//     distance: 435.7716738155548,
//     ParkID: "BA84404E-743C-4841-9F83-87CEDA164E5B",
//     ParkName: "Hovenweep National Monument",
//   },
//   {
//     distance: 443.0698518632018,
//     ParkID: "37C48EE0-2881-4D22-8F91-A249AE3B0CD0",
//     ParkName: "Wind Cave National Park",
//   },
//   {
//     distance: 447.30641579389413,
//     ParkID: "E777590D-C086-4A88-B5A2-AAE47DBD6A6F",
//     ParkName: "Manhattan Project National Historical Park",
//   },
//   {
//     distance: 448.64507144438153,
//     ParkID: "8908E0CA-3603-4578-B957-837F9813E6D5",
//     ParkName: "Valles Caldera National Preserve",
//   },
// ]);
