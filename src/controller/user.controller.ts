import { errorResponse, successResponse } from '../utils/utils';
import { validateUserService } from './../service/user.service';
import { Request, Response } from "express";


export const validateUser = async (req: Request, res: Response) : Promise<void> => {
    try{
        const { email, password } = req.body;
        const User = await validateUserService(email,password)

        if(!User){
            res.status(401).json(errorResponse("User Not found"))
        }
        res.status(200).json(successResponse(User,"User Logged in Successfully!!!"))
    }
    catch (error){
        res.status(500).json(errorResponse("Error Finding User",error))
    }
}