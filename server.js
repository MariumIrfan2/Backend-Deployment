const express = require("express")
const mongoose = require('mongoose')
const StudentRouter = require("./Router/StudentRouter")
const cors = require("cors")
require("dotenv").config();

const CourseRouter = require("./Router/CourseRouter")
const InstituteRouter = require("./Router/InstituteRouter")
const TeacherRouter = require("./Router/TeacherRouter")
const TodoRouter = require("./Router/TodoRouter")
const UserRouter = require("./Router/UserRouter")


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/students", StudentRouter)
app.use("/api/todos", TodoRouter)
app.use("/api/courses", CourseRouter)
app.use("/api/institutes", InstituteRouter)
app.use("/api/teachers", TeacherRouter)
app.use("/api/users", UserRouter)

app.get("/", (req, res) => {
    res.send("Server Started");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "Database Connected Successfully and server is listening on this port 5000"
            );
        });
    })
    .catch((err) => {
        console.log(err);
    });