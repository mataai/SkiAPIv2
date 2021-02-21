import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { type } from 'os';
import { User } from 'src/entities/User';

export const UserDeco = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): User => {
        const request = ctx.switchToHttp().getRequest();
        const user: User = request.user;
        return user;
    },
);