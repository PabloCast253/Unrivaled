import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

//  Define a Type for the JWT Payload
interface JwtPayload {
  id: number;
  username: string;
}

//  Extend Express Request type to include `user`
export interface AuthRequest extends Request {
  user?: JwtPayload;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized - No token provided" });
    return; //  Explicitly return here
  }

  try {
    //  Explicitly type `decoded` to avoid TypeScript warnings
    const decoded = jwt.verify(token, "secretkey") as JwtPayload;

    req.user = decoded; //  Now TypeScript knows `id` and `username` exist

    return next(); //  Ensure the function always returns
  } catch {
    res.status(401).json({ error: "Invalid token" });
    return; //  Explicitly return in the catch block
  }
};

export default authMiddleware;
