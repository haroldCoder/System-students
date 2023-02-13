students = {};
const {client} = require("../db");

students.getStudents = async(req, res) => {
    const student = await client.query('SELECT * FROM students');
    res.json(student.rows);
}

students.addStudent = (req, res) => {
    const {id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, grado, anexo} = req.body;
    client.query(`INSERT INTO students(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, grado, anexo) 
     VALUES('${primer_nombre}', '${segundo_nombre}', '${primer_apellido}', '${segundo_apellido}', '${fecha_nacimiento}', '${grado}', '${anexo}')`)
    .then(()=>{console.log('add student!')})
    .catch((err)=>console.log(err))
}

students.deleteStudent = (req, res) => {
    const {id} = req.params;
    client.query(`DELETE FROM students WHERE id = ${id}`)
    .then(()=>{console.log('delete student')})
    .catch((err)=>{console.log(err)})
}

students.editStudent = (req, res) => {
    const {id} = req.params;
    const {anexo} = req.body;

    client.query(`UPDATE students SET anexo = ${anexo} WHERE id = ${id}`);
}

module.exports = students;