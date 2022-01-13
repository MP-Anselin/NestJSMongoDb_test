import { User } from "../../users/schemas/user.schema";
import { ReturnInfoUserDto } from "../../users/dto/return-info-user.dto";
export declare class LoginReturnInfoUserDto extends ReturnInfoUserDto {
    constructor(token: string, user?: Partial<User>);
    access_token: string;
}
