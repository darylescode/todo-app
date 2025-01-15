import { NextFunction, Request, Response } from "express";

class AsyncWrapper {
  asyncErrorHandler = (cb: Function) => {
    return (req: Request, res: Response, next: NextFunction) =>
      Promise.resolve(cb(req, res, next)).catch((error: Error) => {
        if (error) {
          next(error);
        }
      });
  };
}

export default AsyncWrapper;
