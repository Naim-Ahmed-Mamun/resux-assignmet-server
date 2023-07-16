import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

// get users 
router.get('/',BookController.getAllBooks);
router.get('/recent-books',BookController.getRecentBooks);
router.get('/:id',BookController.getSingleBook);
router.post('/review/:id',BookController.addReview);
router.post('/add-book',BookController.addBook);
router.patch('/edit-book/:id',BookController.updateBook);
router.delete('/:id',BookController.deleteBook);

export const BookRoutes = router; 