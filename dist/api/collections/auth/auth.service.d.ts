import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LogUserDto } from "./dto/log-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginReturnInfoUserDto } from "./dto/login-return-info-user.dto";
import { ReturnInfoUserDto } from "../users/dto/return-info-user.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(logUser: LogUserDto): Promise<any>;
    private static comparePassword;
    private static validatePassword;
    logIn(logForm: any): Promise<LoginReturnInfoUserDto>;
    signUp(registerForm: RegisterUserDto): Promise<ReturnInfoUserDto>;
    logOut(_id: string): Promise<void>;
}
