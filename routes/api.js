const express = require("expres");
const router = express.Router();
const api_controller = require("../controllers/api_controller");

router.get("/", (req, res, next) => {
  res.send({ message: "Hey" });
});

router.get("/posts", api_controller.get_posts);

module.exports = router;
