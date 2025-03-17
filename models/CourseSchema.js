import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const courseSchema = new Schema(
  {
    name: String,
    thumbnail: String,
    description: String,
    price: Number,
    videos: [{ title: String, videoUrl: String, duration: String }],
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
