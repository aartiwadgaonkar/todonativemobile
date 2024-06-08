const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, "task is Required"]
    },
    desc: {
        type: String,
        required: [true, "desc is Required"]
    },
    complete: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("todo",todoSchema)