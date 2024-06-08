require("dotenv").config({ path: "./config/.env" })
const express = require("express")
const mongoose = require("mongoose")
const connect = require("./config/db")
const cors = require("cors")
const app = express()
connect()
app.use(express.json())
app.use(cors())
// app.use(protected)
app.use("/todo", require("./routes/totdoroutes"))
app.use("*",(req,res)=>{
    res.status(404).json({message:"resourse not found"})
})
app.use((err,req,res,next)=>{
    res.status(500).json({message:"server error", err:err.message})
})
mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
    app.listen(process.env.PORT, err => err
        ? console.log("COULD NOT START", err)
        : console.log("SERVER RUNNING")
    )
})
mongoose.connection.on("error", (err) => {
    console.log("mongo error", err);
})
