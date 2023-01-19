const express = require("express");
const router = express.Router();
const api_controller = require("../controllers/api_controller");

router.get("/", (req, res, next) => {
  res.send({ message: "Hey" });
});

router.get("/posts", api_controller.get_posts);

router.post("/post", api_controller.create_post);

router.get("/post/:postId", api_controller.get_post);

router.get("/post/:postId/update");
router.put("/post/:postId/update");

router.get("/post/:postId/delete");
router.delete("/post/:postId/delete");

module.exports = router;
