const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC
  let allCars = await db("cars");
  return allCars;
};

const getById = async (id) => {
  // DO YOUR MAGIC
  let [selectedCar] = await db("cars").where("id", id);
  return selectedCar;
};

const getByVin = async (vin) => {
  // DO YOUR MAGIC
  let [selectedCar] = await db("cars").where("vin", vin);
  return selectedCar;
};

const create = async (car) => {
  // DO YOUR MAGIC
  let [id] = await db("cars").insert(car);
  let newCar = await getById(id);
  return newCar;
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
