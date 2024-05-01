require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const studentsRoutes = require('./routes/studentsRoutes')
const resultRoutes = require('./routes/resultRoutes');
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello All</h1>");
})

app.use('/api/students',studentsRoutes);
app.use('/api/results',resultRoutes);

// Connection to MongoDB database
const connectDB = async () =>{
    try{
        const Connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to the database....");
    }
    catch(err){
        console.log(err);
    }
}
connectDB()

const PORT = process.env.PORT || 2000;

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
