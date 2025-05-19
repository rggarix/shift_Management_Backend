import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { createDepartmentService, getDepartment } from "../service/departments.services";
import { IDepartment } from "../interface/interface";
import { validationResult } from "express-validator";


export const getDepartments = async (req: Request, res: Response) : Promise<void | Response> => {
    try{
        const departments : IDepartment[] | null = await getDepartment();

        res.status(200).json(successResponse(departments, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in creating a staff", error))
    }
}

export const createDepartment = async (req: Request, res: Response) : Promise<void | Response> => {
    try{
        const errors = validationResult(req)
      
       if(!errors.isEmpty()){
        return res.status(400).json(errorResponse("errors",errors.array()))
      }
        const savedStaff = await createDepartmentService(req.body);

        res.status(200).json(successResponse(savedStaff, "Staff Created Successfully"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error in creating a staff", error))
    }
}