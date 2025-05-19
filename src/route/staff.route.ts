import { createStaff, getAllStaff } from "../controller/staff.controller";

const express = require("express");

const router = express.Router();

router.post('/createStaff', createStaff)
router.get('/getAllStaff', getAllStaff)

export default router;