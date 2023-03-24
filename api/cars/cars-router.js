// DO YOUR MAGIC
const router = require("express").Router();
const { getAll, getById } = require("./cars-model");
const { checkCarId } = require("./cars-middleware");

router.get("/", async (req, res) => {
  let allCars = await getAll();
  res.status(200).json(allCars);
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    let car = await getById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  res.json("this works");
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;
