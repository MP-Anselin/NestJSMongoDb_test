import { AuthService } from '../auth.service';
import { ReturnInfoUserDto } from "../../users/dto/return-info-user.dto";
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<ReturnInfoUserDto>;
}
export {};
