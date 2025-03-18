import mongoose from 'mongoose'
const PORT = process.env.PORT
const connectionString = process.env.MONGO_DB_URL
import app from './index.js'

async function connectDB() {
  const connection = await mongoose.connect(connectionString)
  app.listen(PORT, () => {
    console.log('App listening to PORT 5000')
  })
  return connection
}

export default connectDB
