const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    registed_number : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    date_of_birth : {
        type : Date,
        required : true
    }
})

const student = mongoose.model("Student" , studentSchema);

module.exports = student;