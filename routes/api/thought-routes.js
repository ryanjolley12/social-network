const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thought-controller");

// GET to get all thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET to get a single thought by its _id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router.route("/:userId").post(addThought);

// /api/thoughts/:thoughtId/reactions (POST, DELETE)
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;