import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT
const connectionString = process.env.MONGO_DB_URL
import { connect } from 'mongoose'
import Course from './models/CourseSchema.js'

app.use(json())

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

connect(connectionString).then(
  app.listen(PORT, () => {
    console.log('App listening to port ' + PORT)
  })
)
