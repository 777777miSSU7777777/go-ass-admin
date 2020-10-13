import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { SECRET_KEY, UserRoles } from '@helper';

@Injectable()
export class JWTMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        try {
            const accessToken: string = req.headers.authorization;

            const { role } = jwt.verify(accessToken, SECRET_KEY);

            if (role !== UserRoles.admin) {
                throw new Error('User is not admin');
            }
            
            next();
        } catch(e) {
            res.status(HttpStatus.UNAUTHORIZED).json({
                'ok': false,
                'data': null,
                'error': e,
            });

            console.error(`JWT Auth Error: ${e}`);
        }
    }
}