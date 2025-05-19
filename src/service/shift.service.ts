import { IShift } from "../interface/interface";
import shiftModel from "../models/shift.model";


export const addShiftServices = async (data :IShift) : Promise<IShift> => {
    try {
        const savedShift = new shiftModel(data);
        return await savedShift.save();
      } catch (error: any) {
        console.error("Error creating shift in service:", error);
        if (error.status) {
          throw error;
        }
        throw { status: 500, message: "Error creating shift" };
      }
}