import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { User } from 'src/core/entities/user';

export const UserDeco = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    const user: User = request.user;
    return user;
  },
);
