import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(10)
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema)
