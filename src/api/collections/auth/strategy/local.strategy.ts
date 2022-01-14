import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../auth.service';
import {LogUserDto} from "../dto/log-user.dto";
import {ReturnInfoUserDto} from "../../users/dto/return-info-user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string): Promise<ReturnInfoUserDto> {
        const userLogInfo = new LogUserDto()
        userLogInfo.email = email;
        userLogInfo.password = password;
        const currentUser = await this.authService.validateUser(userLogInfo);
        if (!currentUser) {
            throw new UnauthorizedException();
        }
        return currentUser;
    }
}