import { body, param } from "express-validator";

export const staffValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("roleId")
    .notEmpty()
    .isMongoId()
    .withMessage("roleId is required"),
  body("shiftPrefrenceId")
    .notEmpty()
    .isMongoId()
    .withMessage("shiftPrefrenceId is required"),
  body("contactNumber").notEmpty().withMessage("contactNumber is required"),

];