import { User } from "../schemas/user.schema";
export declare class UpdateUserDto {
    constructor(user?: Partial<User>);
    updatedAt: Date;
    lastName: string;
    firstName: string;
    email: string;
    username: string;
    isLog: boolean;
    roles: string[];
}
