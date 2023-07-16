import mongoose from 'mongoose';
import app from './app';
import secret from './config/secret';
import { Server } from 'http';


process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

let server: Server;
const bootstrap = async () => {
  try {
    await mongoose.connect(secret.db_url as string)
    console.log('Database connection successfully')
    server = app.listen(secret.port || 4000, () => {
      console.log(`Example app listening on port ${secret.port || 4000}`)
    })
  } catch (err) {
    console.log(err)
    console.log('database connection failed')
  }
  process.on("unhandledRejection", error => {
    console.log('uncaughtException close the server')
    if (server) {
      server.close(() => {
        console.log(error)
      })
    }
    process.exit(1)
  })
}

bootstrap()


process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})