"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_model_1 = __importDefault(require("./book.model"));
// get all books
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.find({});
    return result;
});
// get recent books
const getRecentBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const mostRecentBooks = yield book_model_1.default.find({}).sort({ publicationDate: -1 }).limit(10);
    return mostRecentBooks;
});
// get single user
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findById(id);
    return result;
});
// addReviewBook
const addReviewBook = (id, review) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.default.findById(id);
    if (book) {
        book.reviews = book.reviews || [];
        book.reviews.push(review);
        yield book.save();
    }
    return book;
});
// addReviewBook
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.default.create(payload);
    return book;
});
// update cow
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield book_model_1.default.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book not found !');
    }
    const result = yield book_model_1.default.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// addReviewBook
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.default.findByIdAndDelete(id);
    return book;
});
exports.BookService = {
    getAllBooks,
    getSingleBook,
    addReviewBook,
    getRecentBooks,
    addBook,
    updateBook,
    deleteBook,
};
