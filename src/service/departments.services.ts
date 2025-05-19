import { IDepartment } from "../interface/interface";
import departmentModel from "../models/department.model";



export const getDepartment = async () : Promise<IDepartment[] | null> => {
    try{
        const departments = await departmentModel.find()
        return departments;
    }
    catch(error :any) {
        console.error("Error creating staff in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating staff" };
    }
}

export const createDepartmentService = async (data: IDepartment) : Promise<IDepartment | null> => {
    try{
        const savedDepartment = new departmentModel(data);
        return await savedDepartment.save()
    }
    catch(error :any) {
        console.error("Error creating Department in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating Department" };
    }
}