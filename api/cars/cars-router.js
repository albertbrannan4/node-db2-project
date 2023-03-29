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
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    create(req.body)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        next(err);
      });
  }
);

module.exports = router;
