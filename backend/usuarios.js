const Users = require('./modeloUsuarios.js');
// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json({ success: true, count: users.length, data: users});
};
// @desc    Create new user
// @route   POST /api/v1/create
// @access  Public
exports.createUser = async (req, res) => {
  console.log(req.body);
  console.log(req.data);
  const {name} = await Users.create(req.body);  
  const id = req.body.id;
//  users.push({ id, name });
  res.status(201).json({ success: true, user: { id, name }, message: 'User created successfully' });
};
// @desc    Update a user
// @route   PATCH /api/v1/users/:id
// @access  Public
exports.updateUser = async (req, res) => {
  const idU = req.params.id;
  const { name } = req.body.name;
  let user = await Users.find({id: idU});
  if (user.length > 0) {
   user = await Users.updateOne({id: idU}, {$set: { "Name" : req.body.name}}).exec();
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ message: `User with ID ${idU} not found` });
  }
};
// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res) => {
  const idU = req.params.id;
  const index = await Users.find({id: idU});
  console.dir(index);
  if (index.length > 0) {
    await Users.deleteOne({id: idU});
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: `User with ID ${idU} not found` });
  }
};
