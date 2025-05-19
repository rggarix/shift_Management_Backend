import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { createStaffService, getAllStaffService } from "../service/staff.service";
import { validationResult } from "express-validator";
import { IShiftTypes, IStaff, IStaffRoles, IUser } from "../interface/interface";
import { AllStaffDataInterface, PaginationOptions } from "../interface/common.interfaces";
import { getRoleById } from "../service/staffRoles.service";


export const createStaff = async (req: Request, res: Response) : Promise<void | Response> => {
    try{
        const errors = validationResult(req)
      
       if(!errors.isEmpty()){
        return res.status(400).json(errorResponse("errors",errors.array()))
      }
        const savedStaff = await createStaffService(req.body);

        res.status(200).json(successResponse(savedStaff, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in creating a staff", error))
    }
}

export const getAllStaff = async (req: Request, res : Response) : Promise<void> => {
    try{
        const pageOptions: PaginationOptions = {
      page: parseInt(req.query.page as string),
      limit: parseInt(req.query.limit as string),
    };
        const savedStaff = await getAllStaffService(pageOptions);

        const finalData = await convertSampleData(savedStaff?.staff);

        const data = {
      data: finalData,
      totalCount: savedStaff?.totalCount,
      totalPages: savedStaff?.totalPages,
      currentPage: savedStaff?.currentPage,
    };

        res.status(200).json(successResponse(data, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in fetching a staff", error))
    }
}

export const convertSampleData = async (
  savedSample: IStaff[] | null
): Promise<AllStaffDataInterface[] | null> => {
  if (savedSample === null) {
    return null;
  }

  const promises: Promise<AllStaffDataInterface>[] = savedSample.map(
    async (staff: IStaff) => {
      let newData: AllStaffDataInterface = {};
     
      newData.roleId = staff?.roleId.toString();
      // Add Department Name

      const role: IStaffRoles | null = await getRoleById(
        (staff?.roleId.toString())
      )
      if (role) {
        newData.roleName = role.name;
      }
      newData.shiftPrefrenceId = staff?.shiftPrefrenceId.toString();
      // Add Current Process Name

      

      newData.name = staff.name;
      newData.contactNumber = staff.contactNumber;
      console.log(newData);
      return newData;
    }
  );

  const finalSampleData = await Promise.all(promises);
  console.log(finalSampleData);
  return finalSampleData;
};
