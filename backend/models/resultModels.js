const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    register_number : {
        type : Number,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    marks : {
        type : Map,
        of : Number,
        required : true
    },
    status : {
        type : String,
        required : true
    }
});

const result = mongoose.model("Results" , resultSchema);

module.exports = result;