const { Todo } = require("./model");

module.exports.getAll = async (_, res) => {
  try {
    const todos = await Todo.find({}).exec();
    return res.status(200).json({ data: todos, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id).exec();
    return res.status(200).json({ data: todo, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};

module.exports.create = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(200).json({ data: todo, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};

module.exports.update = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const todo = await Todo.findByIdAndUpdate(id, body, { new: true }).exec();
    return res.status(200).json({ data: todo, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const result = await Todo.deleteOne({ _id: id }).exec();
    return res.status(200).json({ data: result, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};
