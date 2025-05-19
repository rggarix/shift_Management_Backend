export interface ApiResponse<T>  {
    status : 'success' | "error";
    message : string;
    data? : T;
    error?: any;
}

export const successResponse = <T>(data: T , message= 'success'): ApiResponse<T> => ({
    status: 'success',
    message,
    data,
})

export const errorResponse = <T>(message = 'something went wrong',error: any =null): ApiResponse<T> => ({
    status: "error",
    message,
    error
})