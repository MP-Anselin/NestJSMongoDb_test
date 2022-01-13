import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginReturnInfoUserDto } from "./dto/login-return-info-user.dto";
import { ReturnInfoUserDto } from "../users/dto/return-info-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(req: any): Promise<LoginReturnInfoUserDto>;
    signUp(registerUserDto: RegisterUserDto): Promise<ReturnInfoUserDto>;
    logOut(userId: string): Promise<void>;
}
