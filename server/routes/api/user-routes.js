const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
  updateSingleUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id    ex. api/users/123
router.route("/:id").get(getSingleUser).put(updateSingleUser);

module.exports = router;
