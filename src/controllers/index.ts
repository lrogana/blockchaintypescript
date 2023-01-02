import { NextFunction, Request, Response } from 'express';
//This will check the connection and return a message that the server is running
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) =>{
    return res.status(200).json({
        message: 'Application server running ok'
    });
};

export default {serverHealthCheck}