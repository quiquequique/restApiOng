/* eslint-disable spaced-comment */
//get all members
const errors = require('../helpers/resError.helper');

const getAllMembers = (_, res) => {
  try {
    res.send('list of all members');
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

//get a single member
const getMemberById = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member by id:' + id);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

//create member
const createMember = (req, res) => {
  const { newMember } = req.body;

  try {
    res.send('new member created: ' + newMember);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

//update member
const updateMember = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member updated: ' + id);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

//delete member
const deleteMember = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member deleted: ' + id);
  } catch (err) {
    console.error(err);
    res.status(500).json(errors._500);
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
