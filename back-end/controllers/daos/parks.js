const { getModelForCollection } = require("../../shared/mongoose");
const util = require("util");
const fs = require("fs");

// const { data } = JSON.parse(fs.readFileSync("../../data/allParks.json"));

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

const getParks = async (selectedActivities, state) => {
  const parks = await getModelForCollection("parksSchema");
  const query = await parks
    .find({
      $and: [
        { "activities.name": { $all: selectedActivities } },
        { states: state },
      ],
    })
    .select("name states activities.name fullName description images");
  console.log(query);

  return query;
};

module.exports = getParks;

// getParks(["Shopping", "Food"], "CA");
