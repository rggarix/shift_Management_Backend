import mongoose, { Schema } from 'mongoose';
import { IUser, UserRole } from '../interface/interface';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(UserRole) },
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
