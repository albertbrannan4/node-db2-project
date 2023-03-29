const { getById, getByVin } = require("./cars-model");
const vinValidator = require("vin-validator");
const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  let exists = await getById(req.params.id);
  if (!exists) {
    next({ status: 404, message: "id not found" });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  let error = { status: 400 };
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    error.message = "vin is missing";
  } else if (!make) {
    error.message = "make is missing";
  } else if (!model) {
    error.message = "model is missing";
  } else if (mileage === undefined) {
    error.message = "mileage is missing";
  }

  if (error.message) {
    next(error);
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  let VinIsValid = vinValidator.validate(req.body.vin);
  if (!VinIsValid) {
    next({ status: 400, message: `vin ${req.body.vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  let vinExists = await getByVin(req.body.vin);
  if (vinExists) {
    next({ err: 400, message: `vin ${req.body.vin} already exists` });
  } else {
    next();
  }
  next();
};

module.exports = {
  checkCarId,
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarPayload,
};
