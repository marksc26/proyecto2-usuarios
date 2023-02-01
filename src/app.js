const express = require('express')
const app = express()
const userRouter = require("./users/users.router")


app.use(express.json())


app.get("/", (req, res) => {
    res.json({
        message: "Server Ok!"
    })
})

app.use("/", userRouter)

app.get(9000, () =>{
    console.log("Server started at port 9000")
})


module.exports = app
