import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { createStaffService, getAllStaffService } from "../service/staff.service";
import { validationResult } from "express-validator";
import { IStaff } from "../interface/interface";
import { PaginationOptions } from "../interface/common.interfaces";


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

        res.status(200).json(successResponse(savedStaff, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in fetching a staff", error))
    }
}