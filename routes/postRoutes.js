const express = require("express");
const router = express.Router();

const { getAllPost, createPost } = require("../controllers/postController");

router.route("/").get(getAllPost).post(createPost);

router.get("/", getAllPost);
router.post("/", createPost);

module.exports = router;
