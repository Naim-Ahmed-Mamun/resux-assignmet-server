import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBook } from './book.interface';
import Book from "./book.model"


// get all books
const getAllBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({})
  return result
}

// get recent books
const getRecentBooks = async (): Promise<IBook[] | null> => {
  const mostRecentBooks = await Book.find({}).sort({ publicationDate: -1 }).limit(10);
  return mostRecentBooks
}

// get single user
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id)
  return result
}

// addReviewBook
const addReviewBook = async (id: string, review: string): Promise<IBook | null> => {
  const book = await Book.findById(id);
  if (book) {
    book.reviews = book.reviews || [];
    book.reviews.push(review);
    await book.save();
  }
  return book;
}

// addReviewBook
const addBook = async (payload:IBook): Promise<IBook | null> => {
  const book = await Book.create(payload);
  return book;
}

// update cow
const updateBook = async (id: string,payload: Partial<IBook>): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id:id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  const result = await Book.findOneAndUpdate({ _id:id }, payload, {
    new: true,
  })
  return result
}


// addReviewBook
const deleteBook = async (id:string): Promise<IBook | null> => {
  const book = await Book.findByIdAndDelete(id);
  return book;
}

export const BookService = {
  getAllBooks,
  getSingleBook,
  addReviewBook,
  getRecentBooks,
  addBook,
  updateBook,
  deleteBook,
}
