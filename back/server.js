import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postsRouter from './routes/posts.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/posts', postsRouter)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log('Server started'))
  }).catch(err => console.error(err))