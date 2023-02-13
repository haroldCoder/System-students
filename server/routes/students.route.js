const {Router} = require("express");
const {getStudents, addStudent, deleteStudent} = require("../controllers/students.controller");

const route = Router();

route.route("/")
.get(getStudents)
.post(addStudent);

route.route("/:id")
.get()
.put()
.delete(deleteStudent)

module.exports = route;