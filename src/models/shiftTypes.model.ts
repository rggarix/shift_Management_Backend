import mongoose, { Schema } from 'mongoose';
import { IShiftTypes } from '../interface/interface';

const ShiftTypeSchema = new Schema<IShiftTypes>({
  name: { type: String, required: true },
  timeslot: {type: String, required: true}
}, { timestamps: true });

export default mongoose.model<IShiftTypes>('shiftType', ShiftTypeSchema);
