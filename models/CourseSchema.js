const mongoose = require('mongoose')
const { Schema } = require('mongoose')

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

module.exports = Course
