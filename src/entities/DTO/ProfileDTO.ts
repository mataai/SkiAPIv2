import { User } from "../User";

export class ProfileDTO {
    userId: number;

    firstName: string;

    lastName: string;

    userRoles: string[];

    /**
     *
     */
    constructor(user: User, userRoles) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userRoles = userRoles;
    }
}
