// add async handler for Promise handling
const asyncHandler = require("express-async-handler");

// @desc Get Goals
// @route /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Goals`, hasError: false });
});

// @desc Set Goals
// @route /api/goals
// @access private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Please add a text fields`);
  }
  res.status(200).json({ message: `Set Goal`, hasError: false });
});

// @desc Update Goals
// @route /api/goals/:id
// @access private

const updateGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal ${req.params.id} is Updated`, hasError: false });
});

// @desc Delete Goals
// @route /api/goals/:id
// @access private

const deleteGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal ${req.params.id} is deleted`, hasError: false });
});

module.exports = {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
};
