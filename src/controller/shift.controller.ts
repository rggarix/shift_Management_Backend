import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { addShiftServices } from "../service/shift.service";



export const addShift = async (req:Request, res:Response) : Promise<void> => {
try {

    const savedShift =  await addShiftServices(req.body)
    res.status(201).json(successResponse(savedShift,"created successfully"))
} catch (error) {
    res.status(500).json(errorResponse("error in adding Shift "))
}
}