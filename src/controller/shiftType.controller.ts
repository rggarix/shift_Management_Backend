import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/utils";
import { getAllShiftTypesServices } from "../service/shiftType.service";




export const getAllShiftTypes = async (req:Request, res:Response) : Promise<void> => {
try {

    const shiftTypes =  await getAllShiftTypesServices()
    res.status(200).json(successResponse(shiftTypes,"fetched successfully"))
} catch (error) {
    res.status(500).json(errorResponse("error in fetching shiftTypes "))
}
}