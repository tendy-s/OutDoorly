/**
 * Sample Mongoose schema 
 */
 
var schemaObject = {
    city_name: {
      type: String,
      required: true,
    },
    state_name: {
     type: String,
     required: true,
    },
    state_code: {
      type: String,
      required: false,
    },
    country_name: {
      type: String,
      required: true,
    },
    country_code: {
      type: String,
      required: false,
    },
  };
  
  module.exports = schemaObject;