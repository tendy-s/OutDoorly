const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  id: String,
  name: String,
});

const TopicSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const PhoneNumberSchema = new mongoose.Schema({
  phoneNumber: String,
  description: String,
  extension: String,
  type: String,
});

const EmailAddressSchema = new mongoose.Schema({
  description: String,
  emailAddress: String,
});

const ContactSchema = new mongoose.Schema({
  phoneNumbers: [PhoneNumberSchema],
  emailAddresses: [EmailAddressSchema],
});

const ExceptionHoursSchema = new mongoose.Schema({
  wednesday: String,
  monday: String,
  thursday: String,
  sunday: String,
  tuesday: String,
  friday: String,
  saturday: String,
});

const ExceptionSchema = new mongoose.Schema({
  exceptionHours: ExceptionHoursSchema,
  startDate: String,
  name: String,
  endDate: String,
});

const StandardHoursSchema = new mongoose.Schema({
  wednesday: String,
  monday: String,
  thursday: String,
  sunday: String,
  tuesday: String,
  friday: String,
  saturday: String,
});

const OperatingHoursSchema = new mongoose.Schema({
  exceptions: [ExceptionSchema],
  description: String,
  standardHours: StandardHoursSchema,
  name: String,
});

const AddressSchema = new mongoose.Schema({
  postalCode: String,
  city: String,
  stateCode: String,
  countryCode: String,
  provinceTerritoryCode: String,
  line1: String,
  type: String,
  line3: String,
  line2: String,
});

const ImageSchema = new mongoose.Schema({
  credit: String,
  title: String,
  altText: String,
  caption: String,
  url: String,
});

const EntranceFeeSchema = new mongoose.Schema({
  cost: String,
  description: String,
  title: String,
});

const EntrancePassSchema = new mongoose.Schema({
  cost: String,
  description: String,
  title: String,
});

// Can't find this field populated in dataset so just assumed it will be same as EntraceFeeSchema. If issues, look here:
const FeeSchema = new mongoose.Schema({
  cost: String,
  description: String,
  title: String,
});

// Dates and numbers have so far been set to type String. Need to discuss with team whether to change.
const UserImagesSchema = new mongoose.Schema({
  url: String,
  caption: String,
  uploadDate: String,
  alt: String,
  favouritedCount: Number,
});

const UserReviewSchema = new mongoose.Schema({
  comment: String,
  createdAt: String,
  userName: String,
  experienceRating: String,
});
//testing
const ParkSchema = new mongoose.Schema({
  id: String,
  url: String,
  fullName: String,
  parkCode: String,
  description: String,
  latitude: String,
  longitude: String,
  latLong: String,
  activities: [ActivitySchema],
  topics: [TopicSchema],
  states: String,
  contacts: ContactSchema,
  entranceFees: [EntranceFeeSchema],
  entrancePasses: [EntrancePassSchema],
  fees: [FeeSchema],
  directionsInfo: String,
  directionsUrl: String,
  operatingHours: [OperatingHoursSchema],
  addresses: [AddressSchema],
  images: [ImageSchema],
  weatherInfo: String,
  name: String,
  designation: String,
  userImages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userImagesModel",
    },
  ],
  userReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userReviewsModel",
    },
  ],
});

module.exports = mongoose.model("Park", ParkSchema);

// var schemaObject = {
//     city_name: {
//       type: String,
//       required: true,
//     },
//     state_name: {
//      type: String,
//      required: true,
//     },
//     state_code: {
//       type: String,
//       required: false,
//     },
//     country_name: {
//       type: String,
//       required: true,
//     },
//     country_code: {
//       type: String,
//       required: false,
//     },
//   };

//   module.exports = schemaObject;
