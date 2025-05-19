import { body, param } from "express-validator";

export const userValidator = [
  body("email").notEmpty().withMessage("email is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required"),
];
