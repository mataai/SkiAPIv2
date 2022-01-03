import { UserDto } from './user.dto';

export class LoginResponse {
  employe: UserDto;
  token: string;
}
