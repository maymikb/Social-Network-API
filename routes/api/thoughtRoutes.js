const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  updateUserById,
  createThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtControllers.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateUserById)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeReaction)

module.exports = router;
