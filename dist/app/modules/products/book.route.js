"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
// get users 
router.get('/', book_controller_1.BookController.getAllBooks);
router.get('/recent-books', book_controller_1.BookController.getRecentBooks);
router.get('/:id', book_controller_1.BookController.getSingleBook);
router.post('/review/:id', book_controller_1.BookController.addReview);
router.post('/add-book', book_controller_1.BookController.addBook);
router.patch('/edit-book/:id', book_controller_1.BookController.updateBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
