const { Schema, model } = require('mongoose')

const CourseSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
)

const Course = model('Course', CourseSchema)

module.exports = Course
