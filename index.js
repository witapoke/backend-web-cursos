import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import Course from './models/CourseSchema.js'
import connectDB from './DB.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Un video ma mi gente, pa peldel el tiempo ')
})

app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({})
    res.status(200).json({ ok: true, data: courses })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, error })
  }
})

app.post('/courses', async (req, res) => {
  const { name } = req.body

  try {
    const newCourse = new Course({ name })
    await newCourse.save()
    res.status(200).json({ ok: true, data: newCourse })
  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, error })
  }
})

connectDB()

export default app
