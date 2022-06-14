const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
} = require("../controllers/goalController");

//  Routes Chaining

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

//  this is all routes
{
  /*
router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);*/
}

module.exports = router;
