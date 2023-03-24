const { getById } = require("./cars-model");

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
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
};
