// import fs from "fs";
// import axios from "axios";
// import { allParksCoords } from "../data/allParksCoordinates.js";
// import { closestParksfromDB } from "./daos/closestParks.js";

const fs = require("fs");
const axios = require("axios");
// const allParksCoords = require("../data/allParksCoordinates.js");
const closestParksfromDB = require("./daos/closestParks.js");

// TODO: uncomment after
// const allParksCoords = JSON.parse(
//   fs.readFileSync("../data/allParksCoordinates.json")
// );

let userLat = 0;
let userLon = 0;
// let closestParks = [];

const getGeoCode = async (address) => {
  try {
    const response = await axios.get(
      `https://geocode.maps.co/search?q=${address}`
    );
    const data = response.data;
    userLat = data[0].lat;
    userLon = data[0].lon;
    return [Number(data[0].lat), Number(data[0].lon)];
  } catch (error) {
    console.error(error);
  }
};

// Use the function
// getGeoCode("denver, colorado")
//   .then((data) => {
//     // You can also use the data here
//     console.log("Data222222:", data);
//     console.log(Number(userLat), Number(userLon));
//   })
//   .catch((err) => console.error(err));

// console.log(userLat, userLon);

// receive city name from frontend
// check that letters
// send request to api
// get coordinates
// Loop through all parks, calculatign distance, adding < radius parks to array
// sort array by ascending distance
// get ids of first 10 parks in array
// get those parks from database
// send those parks off to the frontend

async function getClosestParks(allParksCoords, userCoords, radius) {
  let closestParks = [];
  for (let park of allParksCoords) {
    const { Lat, Lon, ParkID, ParkName } = park;
    let distance = calculateDistanceHelper(
      Number(Lat),
      Number(Lon),
      Number(userCoords[0]),
      Number(userCoords[1])
    );
    if (distance <= radius) {
      closestParks.push({ distance, ParkID, ParkName });
    }
  }
  sortParksByDistanceHelper(closestParks);
  return closestParks;
  // console.log(closestParks);
}

// Sorts an array of parks according to their distance field
function sortParksByDistanceHelper(closestParks) {
  let sortedParks = closestParks.sort((p1, p2) =>
    p1.distance > p2.distance ? 1 : p1.distance < p2.distance ? -1 : 0
  );
}

// getClosestParks(allParksCoords, [39, -104]);

function makeCoordinatesFile() {
  let parkCoordinates = {
    ParkName: "",
    ParkID: "",
    Lat: "",
    Lon: "",
  };
  let allParksCoords = [];
  data.forEach((element) => {
    let parkCoordinates = {
      ParkName: element.fullName,
      ParkID: element.id,
      Lat: element.latitude,
      Lon: element.longitude,
    };
    allParksCoords.push(parkCoordinates);
  });
  fs.writeFileSync(
    "../data/allParksCoordinates.json",
    JSON.stringify(allParksCoords)
  );
}

async function getParksByDistance(req, res) {
  try {
    const userCity = req.query.city;
    const userState = req.query.state;
    const userRadius = req.query.radius;
    const cityAndState = userCity + ", " + userState;
    // console.log(cityAndState);
    const coordinates = await getGeoCode(userCity + "," + userState);
    const closestParks = await getClosestParks(
      allParksCoords,
      coordinates,
      userRadius
    );
    const result = await closestParksfromDB(closestParks);
    res.status(201).json(result);

    // console.log(closestParks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal database error" });
  }
}

// let query = {
//   city: "Denver",
//   state: "CO",
//   radius: 600,
// };
// let res;
// let req = { query };
// getParksByDistance(req, res);

// const getParks = async (selectedActivities, state) => {
//   const parks = await getModelForCollection("parksSchema");
//   const query = await parks
//     .find({
//       $and: [
//         { "activities.name": { $all: selectedActivities } },
//         { states: state },
//       ],
//     })
//     .select("name states activities.name");

//   console.log(util.inspect(query, { depth: 3 }));
// };

// module.exports = {
//   getParks,
// };

// getParks(["Shopping", "Food"], "CA");

function calculateDistanceHelper(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2radHelper(lat2 - lat1); // deg2rad below
  var dLon = deg2radHelper(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2radHelper(lat1)) *
      Math.cos(deg2radHelper(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2radHelper(deg) {
  return deg * (Math.PI / 180);
}

module.exports = getParksByDistance;
