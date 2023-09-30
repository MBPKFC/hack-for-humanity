const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").post(createUser);

// api/users/
router.route("/me").get(getSingleUser);

module.exports = router;
