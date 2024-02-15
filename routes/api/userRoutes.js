const router = require('express').Router();
const {
  getUsers,
  getUserById,
  newUser,
  updateUser,
  
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userControllers');

// /api/students
router.route('/').get(getUsers).post(newUser);

// /api/students/:studentId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends').post(addFriend)
.delete(deleteFriend);

module.exports = router;
