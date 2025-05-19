import mongoose, { Schema } from 'mongoose';
import { IStaffRoles } from '../interface/interface';

const StaffRoleSchema = new Schema<IStaffRoles>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { timestamps: true });

export default mongoose.model<IStaffRoles>('staffRole', StaffRoleSchema);
