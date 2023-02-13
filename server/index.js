const express = require("express");
const app = express();
const {connect} = require("./db")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/students", require('./routes/students.route'))

app.listen(8000, (req, res)=>{
    console.log(`server on port 8000`);
    connect();
})