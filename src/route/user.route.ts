import { validateUser } from "../controller/user.controller";
import { userValidator } from "../validators/user.validator";

const express = require("express");

const router = express.Router();

router.post('/validate',userValidator, validateUser)

export default router;