import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/v1'

export const app: Application = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)
