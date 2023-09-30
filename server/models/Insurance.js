const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `insurance` object in User.js
const insuranceSchema = new Schema({
  provider: {
    type: String,
  },
  type: {
    type: String,
  },
  hasPCP: {
    type: Boolean,
  },
  hasEmailed: {
    type: Boolean,
  },
});

module.exports = insuranceSchema;
