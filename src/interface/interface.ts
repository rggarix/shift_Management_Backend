import mongoose from 'mongoose';
import {ITimeStamps, ICreatedUpdatedBy} from './common.interfaces'

export enum UserRole {
    Admin = 'admin'
}

export interface IUser extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  role: UserRole;
  email: string;
  password: string;
}
export interface IStaff extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  roleId: mongoose.Schema.Types.ObjectId;
  contactNumber: number;
  shiftPrefrenceId: mongoose.Schema.Types.ObjectId;
  role?: { _id: mongoose.Schema.Types.ObjectId; name: string };
  shiftPreference?: { _id: mongoose.Schema.Types.ObjectId; name: string };
}

export interface IShiftTypes extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  timeslot: string;
}
export interface IDepartment extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
}

export interface IStaffRoles extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
  departmentId: mongoose.Schema.Types.ObjectId;
}

export interface IShift extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  staffId: mongoose.Schema.Types.ObjectId;
  shiftType: mongoose.Schema.Types.ObjectId;
  date: Date;
}
