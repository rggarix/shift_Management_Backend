import express from "express";
import cors from "./config/cors";
import cookieParser from "cookie-parser";
import UserRouter from '../src/route/user.route'
import StaffRouter from '../src/route/staff.route'
import StaffRolesRouter from '../src/route/staffRoles.route'
import DepartmentRouter from '../src/route/department.route'

const app = express();

app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',UserRouter)
app.use('/api/staff',StaffRouter)
app.use('/api/staffRoles',StaffRolesRouter)
app.use('/api/department',DepartmentRouter)

export default app;
