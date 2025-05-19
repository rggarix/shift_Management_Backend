import { IStaffData, PaginationOptions } from "../interface/common.interfaces";
import { IStaff } from "../interface/interface";
import staffModel from "../models/staff.model";

export const createStaffService = async (
  data: IStaffData
): Promise<IStaff | null> => {
  try {
    const savedStaff = new staffModel(data);
    return await savedStaff.save();
  } catch (error: any) {
    console.error("Error creating staff in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating staff" };
  }
};

export const getAllStaffService = async (
    pageOptions: PaginationOptions
) : Promise<{
  staff: IStaff[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}>   => {
     const { page = 1, limit = 10 } = pageOptions;
    const skip = (page - 1) * limit;
  try {
    const staffPromises = staffModel.find()
      .skip(skip)
      .limit(limit)
      .exec();
    const countPromise = staffModel.countDocuments().exec();

    const [staff, totalCount] = await Promise.all([
      staffPromises,
      countPromise,
    ]);

    const totalPages = Math.ceil(totalCount / limit);
    const currentPage = page;

    return {
      staff,
      totalCount,
      totalPages,
      currentPage,
    };
  } catch (error: any) {
    console.error("Error creating staff in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error creating staff" };
  }
};
