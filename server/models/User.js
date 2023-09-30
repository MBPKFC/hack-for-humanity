const { Schema, model } = require('mongoose');
// import schema from Insurance.js
const insuranceSchema = require('./Insurance');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    gender: {},
    age: {},
    zip: {},
    // set insurance to be an object of data that adheres to the insuranceSchema
    insurance: insuranceSchema,
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
