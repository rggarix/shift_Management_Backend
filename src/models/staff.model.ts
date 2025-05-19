import { type IShiftTypes } from './../interface/interface';
import mongoose, { Schema } from 'mongoose';
import { IStaff } from '../interface/interface';

const StaffSchema = new Schema<IStaff>({
  name: { type: String, required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, required: true , unique: true},
  contactNumber: { type: Number, required: true },
  shiftPrefrenceId: {type: mongoose.Schema.Types.ObjectId, required: true}
}, { timestamps: true });

export default mongoose.model<IStaff>('staff', StaffSchema);
