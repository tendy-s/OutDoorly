const { getModelForCollection } = require("../../shared/mongoose");
const {paginateData} = require('../../shared/pagination')
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

// ONLY RUN to add fake reviews to db
const addReviewsToDB = async () => {
  const model = await getModelForCollection("parksSchema");
let fakeReviews = [
    {
        comment: "Bears, beets, Battlestar Galactica",
        userName: "Dwight Schrute",
        userID: 1234561,
        title: "Hiking is fun!",
        experienceRating: "4",
      },
      {
        comment: "Identity theft is not a joke, Jim!",
        userName: "Jim Halpert",
        userID: 12345,
        title: "Beware of bears",
        experienceRating: "3",
      },
      {
        comment: "I brought my beet salad",
        userName: "Toby Flenderson",
        userID: 1234510,
        title: "Good place for a picnic",
        experienceRating: "4",
      },
      {
        comment: "Where's the nearest bathroom?",
        userName: "Kelly Kapoor",
        userID: 12342,
        title: "Bathroom Breaks Needed",
        experienceRating: "3",
      },
      {
        comment: "I hope we don't get lost",
        userName: "Andy Bernard",
        userID: 12344,
        title: "Navigational Challenges",
        experienceRating: "3",
      },
      {
        comment: "I'm on a diet, no snacks for me",
        userName: "Kevin Malone",
        userID: 12346,
        title: "Great Place for a Workout",
        experienceRating: "4",
      },
      {
        comment: "Time for some beet farming",
        userName: "Mose Schrute",
        userID: 1234511,
        title: "Best Hiking Trail Ever",
        experienceRating: "5",
      },
      {
        comment: "I have a lot of Dundies",
        userName: "Michael Scott",
        userID: 12343,
        title: "Dundie-Worthy Experience",
        experienceRating: "5",
      },
      {
        comment: "The fire's not real, right?",
        userName: "Ryan Howard",
        userID: 1234512,
        title: "Spooky Campfire Stories",
        experienceRating: "4",
      },
      {
        comment: "Who wants to have a picnic?",
        userName: "Phyllis Lapin-Vance",
        userID: 12348,
        title: "Picnic Spot",
        experienceRating: "3",
      },
    {
      comment: "I'll bring my beet whistle",
      userName: "Dwight Schrute",
      userID: 1234562,
      title: "Beet Whistling Adventure",
      experienceRating: "5",
    },
    {
      comment: "I'm up for some extreme hiking!",
      userName: "Creed Bratton",
      userID: 1234563,
      title: "Thrills and Chills",
      experienceRating: "4",
    },
    {
      comment: "Can't wait to take photos!",
      userName: "Pam Beesly",
      userID: 1234564,
      title: "Photography Paradise",
      experienceRating: "5",
    },
    {
      comment: "I'll bring my secret snacks",
      userName: "Oscar Martinez",
      userID: 1234565,
      title: "Delicious Treats",
      experienceRating: "4",
    },
    {
      comment: "I'll do some yoga poses on the hike",
      userName: "Angela Martin",
      userID: 1234566,
      title: "Yoga in Nature",
      experienceRating: "3",
    },
    {
      comment: "I'll be the campfire storyteller",
      userName: "Michael Scott",
      userID: 1234567,
      title: "Nighttime Adventures",
      experienceRating: "4",
    },
    {
      comment: "I'm just here for the nature",
      userName: "Erin Hannon",
      userID: 1234568,
      title: "Nature Lover's Dream",
      experienceRating: "5",
    },
    {
      comment: "I'll sing campfire songs",
      userName: "Andy Bernard",
      userID: 1234569,
      title: "Music and Hiking",
      experienceRating: "3",
    },
    {
      comment: "Who needs a map? I'll lead the way!",
      userName: "Kevin Malone",
      userID: 1234570,
      title: "Navigational Expert",
      experienceRating: "4",
    },
    {
      comment: "Hiking is the perfect time for birdwatching",
      userName: "Phyllis Smith",
      userID: 1234571,
      title: "Birdwatching Enthusiast",
      experienceRating: "5",
    },
  ];

//  const parks = await model.find({});
const query = await model.updateMany(
          {},
          { $set: { userReviews: fakeReviews } }
        );
 console.log("Query ", query)
  // const { data } = JSON.parse(
  //   fs.readFileSync("../../data/allParksAmenities.json")
  // );

  // for (let amenities of data) {
  //   // console.log(util.inspect(amenities, {showHidden: false, depth: null, colors: true}))
  //   for (let amenity of amenities) {
  //     let amenityName = amenity.name;
  //     // console.log(util.inspect(amenityName, {showHidden: false, depth: null, colors: true}))
  //     for (let p of amenity.parks) {
  //       let parkCode = p.parkCode;
  //       console.log(
  //         util.inspect(parkCode, {
  //           showHidden: false,
  //           depth: null,
  //           colors: true,
  //         })
  //       );
  //       const query = await model.updateMany(
  //         { parkCode: p.parkCode },
  //         { $push: { amenities: amenityName } }
  //       );
  //       console.log(query);
  //     }
  //   }
  // }
}

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

const getParks = async (
  selectedActivities,
  selectedAmenities,
  state,
  sortBy = "", 
  offset,
  limit,
  page
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

  if (!selectedActivities && !selectedAmenities && !sortBy && !state) {
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
    queryBuilder["$and"].push({
      states: { $regex: `${state}`, $options: "i" },
    });
  }

  if (sortBy) {
    sorting.fullName = sortBy;
  }

  const query = parks
  .find(queryBuilder)
  .select(queryProjection)
  .sort(sorting)
  .limit(limit)
  .skip(offset)
  const data = await query.exec()

  const countQuery = parks
  .find(queryBuilder)
  .select(queryProjection)
  const result = await paginateData(parks, countQuery, data, page, limit)

  return result;
};

const getParkDetails = async (id) => {
  const parks = await getModelForCollection("parksSchema");
  let queryProjection =
    "id fullName parkCode description operatingHours weatherInfo latitude longitude images userImages userReviews entranceFees fees";

  const result = await parks.findById(id).select(queryProjection);
  // console.log(result);
  return result;
};

const submitImages = async (id, url) => {
  const parks = await getModelForCollection("parksSchema");

  let result = await parks.findById(id).select("fullName parkCode userImages");

  if (result) {
    result.userImages.push({
      url: url,
      favouritedCount: 0,
      uploadDate: new Date(),
    });
  }

  await result.save();

  console.log(result.userImages);
  return result;
};

const editImage = async (imageID, count) => {
  const parks = await getModelForCollection("parksSchema");

  let countNumber = +count;

  let updated = await parks.updateOne(
    { "userImages._id": imageID },
    { $set: { "userImages.$.favouritedCount": countNumber } }
  );
  let result = await parks.findOne({
    userImages: { $elemMatch: { _id: imageID } },
  });

  // console.log(result.userImages);
  return result.userImages;
};

const deleteImage = async (id) => {
  const parks = await getModelForCollection("parksSchema");

  const image = await parks.updateMany({ $pull: { userImages: { _id: id } } });

  if (!image) {
    throw new Error(`No image found with ID ${id}`);
  }

  console.log(image);
};

const retrieveImages = async (id) => {
  const parks = await getModelForCollection("parksSchema");

  const park = await parks.findById(id);

  if (!park) {
    throw new Error(`No image found with ID ${id}`);
  }

  // console.log(park);

  if (park.userImages) {
    return park.userImages;
  }

  return {};
};

module.exports = {
  getParks,
  getParkDetails,
  submitImages,
  editImage,
  deleteImage,
  retrieveImages,
};

// getParks(["Shopping", "Food"], "CA");
// populateLocaldatabase();
// addAmenitiesToDB();
// getParks(['Astronomy'], ['Bicycle - Rack'], "CA", 'desc');

// addReviewsToDB();
