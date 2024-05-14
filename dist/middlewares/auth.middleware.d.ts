import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { ExpressRequestInterface } from 'src/user/types/expressRequest.interface';
import { UserService } from 'src/user/user.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: ExpressRequestInterface, res: Response, next: NextFunction): Promise<void>;
}
