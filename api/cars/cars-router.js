// DO YOUR MAGIC
const router = require("express").Router();
router.get("/", (req, res) => {
  res.json("endpoint works");
});
module.exports = router;
