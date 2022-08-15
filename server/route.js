const router = require("express").Router();

const todoController = require("./controller");
module.exports = (app) => {
  router.get("/", todoController.getAll);
  router.get("/:id", todoController.getById);
  router.post("/", todoController.create);
  router.put("/:id", todoController.update);
  router.delete("/:id", todoController.delete);
  app.use("/todos", router);
};
