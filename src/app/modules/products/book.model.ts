import mongoose, { Schema } from 'mongoose'
import { IBook } from './book.interface'

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: String, required: true },
  reviews: { type: [String], default: [] },
  createdBy: { type: String, required: true },
})

const Book = mongoose.model<IBook>('Book', BookSchema)

export default Book
