import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

// get all users
const getAllUsers = async (): Promise<IUser[] | null> => {
  const result = await User.find({})
  return result
}
// get single user
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}

// update user
const updateUser = async (id: string,payload: Partial<IUser>): Promise<IUser | null> => {
  const isExist = await User.findOne({ id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !')
  }

  const result = await User.findOneAndUpdate({ id }, payload, {
    new: true,
  })
  return result
}

// delete a user 
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result;
};

export const UsersService = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
