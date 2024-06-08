const todo = require("../models/todo")
const asyncHandler= require("express-async-handler")
exports.addtodo = asyncHandler( async(req, res) => {

    await  todo.create(req.body)
    res.json({
                message: "todo added",
            })
  
})
exports.getAlltodo = asyncHandler( async(req, res) => {

  const result=  await  todo.find()
    res.json({
                message: "todo fetch success",result
            })
  
})
exports.updatetodo = asyncHandler( async(req, res) => {

 await  todo.findByIdAndUpdate(req.params.todoId,req.body)
    res.json({
                message: "todo updated",
            
            })
  
})
exports.deletetodo = asyncHandler( async(req, res) => {

    await  todo.findByIdAndDelete(req.params.todoId)
    res.json({
                message: "todo delete",
            })
  
})