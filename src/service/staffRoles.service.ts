import { IDepartment, IStaffRoles } from "../interface/interface";
import staffRoleModel from "../models/staffRole.model";



export const getDepartment = async () : Promise<IStaffRoles[] | null> => {
    try{
        const departments = await staffRoleModel.find()
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

export const createStaffRolesService = async (data: IStaffRoles) : Promise<IStaffRoles | null> => {
    try{
        const savedStaffRole = new staffRoleModel(data);
        return await savedStaffRole.save()
    }
    catch(error :any) {
        console.error("Error creating Staff Role in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating Staff Role" };
    }
}