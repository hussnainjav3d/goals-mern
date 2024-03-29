const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
  getSpecificGoal,
} = require("../controllers/goalController");

//  Routes Chaining

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals).get(getSpecificGoal);

//  this is all routes
{
  /*
router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);*/
}

module.exports = router;
