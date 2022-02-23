import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

//const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.rsntn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.CONNECTION_URL).then(()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)})

app.listen(PORT)
;