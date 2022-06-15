// add async handler for Promise handling
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get Goals
// @route /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ data: { goals: goals }, hasError: false });
});

// @desc Set Goals
// @route /api/goals
// @access private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Please add a text fields`);
  }

  const goals = await Goal.create({ text: req.body.text });
  res.status(200).json({ data: { goals: goals }, hasError: false });
});

// @desc Update Goals
// @route /api/goals/:id
// @access private

const updateGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ data: { updatedGoal }, hasError: false });
});

// @desc Delete Goals
// @route /api/goals/:id
// @access private

const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  await Goal.deleteOne(req.param.id);
  res.status(200).json({ data: { id: req.params.id }, hasError: false });
});

module.exports = {
  getGoals,
  deleteGoals,
  updateGoals,
  setGoals,
};
