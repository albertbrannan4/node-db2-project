const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/cars.db3",
  },
  useNullAsDefault: true,
});

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

const create = () => {
  // DO YOUR MAGIC
  // let created = db("dealer").create;
};

module.exports = {
  getAll,
  getById,
  create,
};
