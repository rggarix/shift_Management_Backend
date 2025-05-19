import { IUser } from "../interface/interface";
import userModel from "../models/user.model";

export const validateUserService = async (
  email: string,
  password: string
): Promise<IUser | null> => {
  try {
    const user = await userModel.findOne({ email, password });
    return user;
  } catch (error : any) {
    console.error("Error validating user in service:", error);
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "Error validating user" };
  }
};
