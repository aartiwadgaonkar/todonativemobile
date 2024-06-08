const { addtodo, getAlltodo, updatetodo, deletetodo } = require("../controllers/todocontroller")


const router = require("express").Router()

router
.post("/add-todo", addtodo)
.get("/", getAlltodo)
.put("/update-todo/:todoId",updatetodo)
.delete("/delete-todo/:todoId",deletetodo)


module.exports = router