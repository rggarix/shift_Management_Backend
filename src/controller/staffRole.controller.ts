import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { validationResult } from "express-validator";
import { IStaffRoles } from "../interface/interface";
import { createStaffRolesService } from "../service/staffRoles.service";


// export const getDepartments = async (req: Request, res: Response) : Promise<void | Response> => {
//     try{
//         const departments : IStaffRoles[] | null = await getDepartment();

//         res.status(200).json(successResponse(departments, "Staff Created Successfully"))
//     }
//     catch (error){
//         res.status(500).json(errorResponse("Error in creating a staff", error))
//     }
// }

export const createStaffRole = async (req: Request, res: Response) : Promise<void | Response> => {
    try{
        const errors = validationResult(req)
      
       if(!errors.isEmpty()){
        return res.status(400).json(errorResponse("errors",errors.array()))
      }
        const savedStaffRole = await createStaffRolesService(req.body);

        res.status(200).json(successResponse(savedStaffRole, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in creating a staff", error))
    }
}