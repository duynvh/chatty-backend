import { NotAuthorizedError } from 'src/shared/globals/helpers/error-handler';
import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import { config } from '@root/config';
import { AuthPayload } from '@auth/interfaces/auth.interface';

export class AuthMiddleware {
  public verifyUser(req: Request, res: Response, next: NextFunction): void {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError(
        'Token is not available. Please login again'
      );
    }

    try {
      const payload: AuthPayload = JWT.verify(
        req.session?.jwt,
        config.JWT_TOKEN!
      ) as AuthPayload;
      req.currentUser = payload;
    } catch (error) {
      throw new NotAuthorizedError(
        'Token is not available. Please login again'
      );
    }

    next();
  }

  public checkAuthentication(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError(
        'Token is not available. Please login again'
      );
    }

    next();
  }
}

export const authMiddleware: AuthMiddleware = new AuthMiddleware();
