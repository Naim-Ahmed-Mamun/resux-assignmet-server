import { IUser } from './user.interface';
import sendResponse from "../../shared/sendResponse";
import httpStatus from 'http-status';
import catchAsync from '../../shared/createAsync';
import { Request, Response } from 'express';
import { UsersService } from './user.service';

// get All users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getAllUsers();
  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully !',
    data: result,
  });
});

// get single user
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getSingleUser(req.params.id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully !',
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await UsersService.updateUser(id, updatedData);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully !',
    data: result,
  });
});

// delete a user
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UsersService.deleteUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully !',
    data: result,
  });
});

export const UsersController = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};