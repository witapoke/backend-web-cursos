import mongoose from 'mongoose'
const PORT = process.env.PORT
const connectionString = process.env.MONGO_DB_URL
import app from './index.js'

export default async function connectDB() {
  await mongoose
    .connect(connectionString)
    .then(() =>
      app.listen(PORT, () => console.log('App listening to port 5000'))
    )
}
