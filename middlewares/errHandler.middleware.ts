import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof ErrorMessage) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      success: false,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 500,
      success: false,
      message: err.message,
    });
  }
};

class ErrorMessage extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { errorHandler, ErrorMessage };