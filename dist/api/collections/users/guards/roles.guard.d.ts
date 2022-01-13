import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from "../users.service";
export declare class RolesGuard implements CanActivate {
    private usersService;
    private roles;
    constructor(usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
