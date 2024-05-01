const Student = require('../models/studentModels')

const createStudent = async (req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(201).send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
}

const getStudents = (req,res)=>{
    res.status(200).send('<h1>This is from get student router</h1>');
}

module.exports = {createStudent,getStudents};