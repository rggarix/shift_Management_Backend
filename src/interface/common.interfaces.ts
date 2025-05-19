import mongoose from 'mongoose';

export interface ITimeStamps {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreatedUpdatedBy {
  createdBy?: mongoose.Schema.Types.ObjectId;
  updatedBy?: mongoose.Schema.Types.ObjectId;
}

export interface IStaffData {
    name: string;
    roleId: mongoose.Schema.Types.ObjectId;
    contactNumber: number;
    shiftPrefrenceId: mongoose.Schema.Types.ObjectId;
}

export interface PaginationOptions {
    page?: number;
    limit?: number;
  }