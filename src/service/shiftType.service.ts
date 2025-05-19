import { IShiftTypes } from "../interface/interface";
import shiftTypesModel from "../models/shiftTypes.model";

export const getAllShiftTypesServices = async () : Promise<IShiftTypes[] | null> => {
    try{
        const shiftTypes = await shiftTypesModel.find()
        return shiftTypes;
    }
    catch(error :any) {
        console.error("Error fetching shiftTypes in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error shiftTypes staff" };
    }
}