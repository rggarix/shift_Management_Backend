import { getDepartments,createDepartment } from "../controller/department.controller";
import { createStaff } from "../controller/staff.controller";

const express = require("express");

const router = express.Router();

router.post('/createDepartment', createDepartment)
router.get('/getDepartment', getDepartments)

export default router;