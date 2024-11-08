const express = require('express');
const router = express.Router();
const { getUser, getUsers, createUser, updateUser, deleteUser } = 
require('./usuarios.js');
router.route('/users').get(getUsers); // Read: Get all users
router.route('/create').post(createUser); // Create: Create a new user  
router.route('/users/:id')
  .patch(updateUser) // Update: Update a user by ID
  .delete(deleteUser); // Delete: Delete a user by ID

module.exports = router;
