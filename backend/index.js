const express = require("express");
const zod = require("zod");
const app = express();
const cors = require("cors");
const PORT = 3000;
const { TodoSchema, UpdateSchema } = require("./types.js");

// body{
// title :string
// description
// }
const dbmodel = require("./db.js");
app.use(cors({ origin: "http://localhost:5173/" }));
app.use(express.json());

app.post("/todo", async (req, res) => {
  const bd = req.body;
  const TodosPosted = TodoSchema.safeParse(bd);
  if (!TodosPosted.success) {
    res.status(411).json({ msg: "You are sending the wrong input" });
  }
  await dbmodel.create({
    title: bd.title,
    description: bd.description,
    completed: false,
  });
  res.json({ msg: "Todo Created" });
});

app.get("/todos", async (req, res) => {
  const findTodo = await dbmodel.find({});
  res.status(200).json(findTodo);
});

app.put("/complete", async (req, res) => {
  const bd = req.body;
  const UpdatesPosted = UpdateSchema.safeParse(bd);
  if (!UpdatesPosted.success) {
    res.status(404).send("You are sending the wrong input");
  }

  const filter = { _id: bd._id };
  const update = { completed: true };

  const updatedTodo = await dbmodel.findOneAndUpdate(filter, update);
  if (!updatedTodo) {
    res.status(404).json({ msg: "Todo not found" });
  } else res.status(200).json({ msg: "Todo updated" });
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
