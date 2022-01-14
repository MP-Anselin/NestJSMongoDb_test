import { User } from "../schemas/user.schema";
export declare class UpdateUserDto {
    constructor(user?: Partial<User>);
    updatedAt: Date;
    last_name: string;
    first_name: string;
    email: string;
    username: string;
    isLog: boolean;
    roles: string[];
}
