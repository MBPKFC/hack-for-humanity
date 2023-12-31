const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});

    // Creates Users
    await User.create(userSeeds);
    const userData = await User.find();
    console.log(`${userData.length} entries added`)

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  
  process.exit(0);
});
