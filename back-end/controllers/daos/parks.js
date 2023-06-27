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

const addAmenitiesToDB = async () => {
  const model = await getModelForCollection("parksSchema");

  const { data } = JSON.parse(
    fs.readFileSync("../../data/allParksAmenities.json")
  );

  for (let amenities of data) {
    // console.log(util.inspect(amenities, {showHidden: false, depth: null, colors: true}))
    for (let amenity of amenities) {
      let amenityName = amenity.name;
      // console.log(util.inspect(amenityName, {showHidden: false, depth: null, colors: true}))
      for (let p of amenity.parks) {
        let parkCode = p.parkCode;
        console.log(
          util.inspect(parkCode, {
            showHidden: false,
            depth: null,
            colors: true,
          })
        );
        const query = await model.updateMany(
          { parkCode: p.parkCode },
          { $push: { amenities: amenityName } }
        );
        console.log(query);
      }
    }
  }
};

// const getParks = async (selectedActivities, state) => {
//   const parks = await getModelForCollection("parksSchema");
//   const query = await parks
//     .find({
//       $and: [
//         { "activities.name": { $all: selectedActivities } },
//         { states: state },
//       ],
//     })
//     .select("name states activities.name fullName description images");
//   console.log(query);

//   return query;
// };

const getParks = async (
  selectedActivities,
  selectedAmenities,
  state,
  sortBy=""
) => {
  const parks = await getModelForCollection("parksSchema");

  let queryBuilder = {
    $and: [],
  };

  let queryProjection =
    "fullName parkCode states activities.name description images amenities";

  let sorting = {
    fullName: "asc",
  };

  if (!selectedActivities && !selectedAmenities && !sortBy && !state){
    queryBuilder = {};
  }

  if (selectedActivities) {
    queryBuilder["$and"].push({
      "activities.name": { $all: selectedActivities },
    });
  }

  if (selectedAmenities) {
    queryBuilder["$and"].push({ amenities: { $all: selectedAmenities } });
  }


  if (state) {
    queryBuilder["$and"].push({ states: { "$regex": `${state}`, "$options": "i" } });
  }

  if (sortBy) {
    sorting.fullName = sortBy;
  }

  const result = await parks
    .find(queryBuilder)
    .select(queryProjection)
    .sort(sorting);

  console.log(result);
  return result;
};

module.exports = getParks;

// addAmenitiesToDB();
// getParks(['Astronomy'], ['Bicycle - Rack'], "CA", 'desc');


