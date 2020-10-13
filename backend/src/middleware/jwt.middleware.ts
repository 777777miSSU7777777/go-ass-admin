import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '@helper';

@Injectable()
export class JWTMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        try {
            const accessToken: string = req.headers.authorization;

            jwt.verify(accessToken, SECRET_KEY);

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