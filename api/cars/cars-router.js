// DO YOUR MAGIC
const router = require("express").Router();
const { getAll, getById } = require("./cars-model");
router.get("/", async (req, res) => {
  try {
    let allCars = await getAll();
    res.status(200).json(allCars);
  } catch (err) {
    res.status(500).json({ message: "Cannot acquire all cars" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let car = await getById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: "Cannot acquire car" });
  }
});
module.exports = router;
