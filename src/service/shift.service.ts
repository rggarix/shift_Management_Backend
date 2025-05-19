import { IShift } from "../interface/interface";
import shiftModel from "../models/shift.model";


export const addShiftServices = async (data: IShift): Promise<IShift> => {
  try {
    // Check if a shift with the same staffId and shiftType already exists
    const existingShift = await shiftModel.findOne({
      staffId: data.staffId,
      shiftType: data.shiftType,
    });

    if (existingShift) {
      throw { status: 409, message: "Shift already exists for this staff and shift type" };
    }

    const savedShift = new shiftModel(data);
    return await savedShift.save();
  } catch (error: any) {
    console.error("Error creating shift in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating shift" };
  }
};