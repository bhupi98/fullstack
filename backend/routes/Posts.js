const router = require("express").Router();
const { Posts } = require("../models");
router.get("/", async (req, res) => {
  const listOfAllPosts = await Posts.findAll();
  res.json(listOfAllPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.send(post);
});

module.exports = router;
