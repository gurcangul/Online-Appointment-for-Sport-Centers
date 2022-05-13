import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan'

import connectDB from './db/connect.js'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

import errorHandlerMiddleware from './middleware/errorHandler.js'
import notFoundMiddleware from './middleware/notFound.js'
import authRouter from './routes/authRoutes.js'   


const app = express();
dotenv.config();


if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
  }
  
  app.use(express.json())
  app.use(cors())
  
  app.get('/', (req, res) => {
    res.json({msg:'Server is runnig!'})
  })
  
  app.get('/api/v1', (req, res) => {
    res.json({msg:'API'})
  })
  
  app.use('/api/v1/auth', authRouter)
  
  app.use(notFoundMiddleware)
  app.use(errorHandlerMiddleware)
  
  const port = process.env.PORT || 5000
  
  
  const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
      })
    } catch (error) {
      console.log(error) 
    }
  }
  
  start()