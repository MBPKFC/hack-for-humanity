// import user model
const { User } = require("../models");

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find().select("-__v");

      res.json(allUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // get single user
  async getSingleUser(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.id }).select(
        "-__v"
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create user
  // example body can be found in server/seeds/userSeeds.json
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // update a user
  // example body can be found in server/seeds/userSeeds.json
  async updateSingleUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
