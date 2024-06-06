const zod = require("zod");
const TodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const UpdateSchema = zod.object({
  _id: zod.string(),
});
module.exports = { TodoSchema, UpdateSchema };
