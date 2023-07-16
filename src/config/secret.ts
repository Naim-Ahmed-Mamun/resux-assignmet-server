import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env:'production',
  port: 7000,
  db_url: 'mongodb+srv://shofystore22:Amp0QXX2UGFrMQJ6@cluster0.8pmmysm.mongodb.net/redux-assignment'
  // env: process.env.NODE_ENV,
  // port: process.env.PORT,
  // db_url: process.env.DATABASE_URL
}
