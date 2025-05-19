import { IDepartment } from './../interface/interface';
import mongoose, { Schema } from 'mongoose';

const DepartmentSchema = new Schema<IDepartment>({
  name: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IDepartment>('department', DepartmentSchema);
