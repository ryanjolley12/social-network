// GET all users

// GET user by ID 

// POST all users

// PUT update user by ID

// DELETE remove user by its ID 




// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');
// const { create } = require("../../models/User");

// /api/users/ ( GET ALL, CREATE )
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:id (GET, PUT, DELETE)
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId ( CREATE AND DELETE FRIEND)
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;