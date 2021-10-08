//get all members
const getAllMembers = (_, res) => {
  try {
    res.send('list of all members');
  } catch (err) {
    res.status(500).json({ err });
  }
};

//get a single member
const getMemberById = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member by id:' + id);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//create member
const createMember = (req, res) => {
  const { newMember } = req.body;

  try {
    res.send('new member created: ' + newMember);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//update member
const updateMember = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member updated: ' + id);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//delete member
const deleteMember = (req, res) => {
  const { id } = req.params;

  try {
    res.send('member deleted: ' + id);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
