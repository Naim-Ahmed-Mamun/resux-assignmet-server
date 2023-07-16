import express from 'express';
import { UsersController } from './user.controller';

const router = express.Router();

// get single user 
router.get('/:id',UsersController.getSingleUser)
//update a Single User 
router.patch('/:id',UsersController.updateUser)
//delete a Single User 
router.delete('/:id',UsersController.deleteUser)
// get users 
router.get('/',UsersController.getAllUsers)

export const UserRoutes = router; 