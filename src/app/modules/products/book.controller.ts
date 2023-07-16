import { IBook } from './book.interface';
import sendResponse from "../../shared/sendResponse";
import httpStatus from 'http-status';
import catchAsync from '../../shared/createAsync';
import { BookService } from './book.service';
import { Request, Response } from 'express';


// get All book
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  });
});

// get recent book
const getRecentBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getRecentBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  });
});

// get single book
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  });
});

// add review
const addReview = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.addReviewBook(req.params.id,req.body.review);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully !',
    data: result,
  });
});

// post book
const addBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.addBook(req.body);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added successfully !',
    data: result,
  });
});

// update cow
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await BookService.updateBook(id, updatedData);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully !',
    data: result,
  });
});

// post book
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book delete successfully !',
    data: result,
  });
});

export const BookController = {
  getAllBooks,
  getSingleBook,
  addReview,
  getRecentBooks,
  addBook,
  updateBook,
  deleteBook,
};