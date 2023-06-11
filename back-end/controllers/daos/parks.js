const { getModelForCollection } = require("../../shared/mongoose");

// import data from ('../../data/allParks.json')
// const data = require("../../data/allParks.json");

const fs = require("fs");

const { data } = JSON.parse(fs.readFileSync("../../data/allParks.json"));

// ONLY RUN to populate local DB upon initialization of backend
const populateLocaldatabase = async () => {
  const model = await getModelForCollection("parksSchema");
  for (park of data) {
    try {
      const obj = new model(park);
      console.log(obj);
      await obj.save();
    } catch (e) {
      console.log(e);
    }
  }
};

const getParks = async (req) => {
  const activities1 = "Shopping";
  const activies2 = "Astronomy";
  const state = "CA";

  const parks = await getModelForCollection("parksSchema");
  const query = await parks.findOne({
    $and: [
      { "activities.name": activities1 },
      { "activities.name": activies2 },
      { states: state },
    ],
  });

  console.log(query);
};


getParks();
