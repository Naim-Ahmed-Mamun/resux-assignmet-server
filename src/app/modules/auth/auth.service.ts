import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const result = User.create(user);
  return result;
}

const loginUser = async (payload: { email: string; password: string }): Promise<IUser | null> => {
  const { email, password } = payload;

  const isUserExist = await User.findOne({ email: email });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const hashedPassword = isUserExist.password;
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  return isUserExist;
}

export const AuthService = {
  createUser,
  loginUser,
}
