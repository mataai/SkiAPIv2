export class LoginRequestDto {
  userID: number;
  password: string;
  constructor(userID: number, password: string) {
    this.userID = userID;
    this.password = password;
  }
}
