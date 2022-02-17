import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose  from 'mongoose'



const app = express();

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());
//app.use(express.json());


const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.rsntn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)})

app.listen(PORT)
;