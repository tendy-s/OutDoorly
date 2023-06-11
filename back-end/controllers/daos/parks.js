const { getModelForCollection } = require("../../shared/mongoose");
const util = require("util");

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

const getParks = async (selectedActivities, state) => {
  const parks = await getModelForCollection("parksSchema");
  const query = await parks
    .find({
      $and: [
        { "activities.name": { $all: selectedActivities } },
        { states: state },
      ],
    })
    .select("name states activities.name");

  console.log(util.inspect(query, { depth: 3 }));
};

module.exports = {
  getParks,
};

getParks(["Shopping", "Food"], "CA");
