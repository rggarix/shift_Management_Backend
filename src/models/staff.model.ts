
import mongoose, { Schema } from 'mongoose';
import { IStaff } from '../interface/interface';

const StaffSchema = new Schema<IStaff>({
  name: { type: String, required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "staffRole" },
  contactNumber: { type: Number, required: true },
  shiftPrefrenceId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "shiftType"}
}, { timestamps: true });

export default mongoose.model<IStaff>('staff', StaffSchema);
