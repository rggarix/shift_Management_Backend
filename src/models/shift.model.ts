
import mongoose, { Schema } from 'mongoose';
import { IShift, IStaff } from '../interface/interface';

const ShiftSchema = new Schema<IShift>({
  staffId: { type:  mongoose.Schema.Types.ObjectId, required: true },
  shiftType: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "staffRole" },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model<IShift>('shift', ShiftSchema);
