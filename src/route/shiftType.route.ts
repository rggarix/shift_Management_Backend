import { getAllShiftTypes } from "../controller/shiftType.controller";


const express = require("express");

const router = express.Router();

router.get('/getAllShiftTypes', getAllShiftTypes)
// router.get('/getAllStaff', getAllStaff)

export default router;