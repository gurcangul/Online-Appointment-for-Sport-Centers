import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import connectDB from './server/src/db/connect.js'
import dotenv from 'dotenv';

import errorHandlerMiddleware from './server/src/middleware/errorHandler.js'
import notFoundMiddleware from '../server/src/middleware/notFound.js'
import authRouter from './server/src/routes/authRoutes.js'
import bookingsRouter from './server/src/routes/bookingsRoutes.js'
import authenticateUser from './server/src/middleware/auth.js'


const app = express();
dotenv.config();


if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
  }

  const __dirname = dirname(fileURLToPath(import.meta.url))
  
  app.use(express.static(path.resolve(__dirname, './client/build')))

  app.use(express.json())
  app.use(cors())
  

app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
  
  app.get('/api/v1', (req, res) => {
    res.json({msg:'API'})
  })
  
  app.use('/api/v1/auth', authRouter)

  app.use('/api/v1/bookings', authenticateUser, bookingsRouter)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  })
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