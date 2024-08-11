import { UserStatus } from '@prisma/client';

export type JwtPayload = {
  sub: string;
  userName: string;
  status: UserStatus;
};
