// DO YOUR MAGIC
const router = require("express").Router();
const { getAll, getById, create } = require("./cars-model");
const {
  checkCarId,
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarPayload,
} = require("./cars-middleware");

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

router.post(
  "/",
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarPayload,
  async (req, res, next) => {
    try {
      let created = await create(req.body);
      res.status(201).json(created);
    } catch (err) {
      next(err);
    }
  }
);

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;
