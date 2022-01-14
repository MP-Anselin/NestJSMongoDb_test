import {Injectable, InternalServerErrorException, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {LogUserDto} from "./dto/log-user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";
import {User} from "../users/schemas/user.schema";
import * as bcrypt from "bcryptjs";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";
import {UpdateUserDto} from "../users/dto/update-user.dto";
import {LoginReturnInfoUserDto} from "./dto/login-return-info-user.dto";
import {ReturnInfoUserDto} from "../users/dto/return-info-user.dto";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async validateUser(logUser: LogUserDto): Promise<any> {
        const {email, password} = logUser;
        const currentUser: User = await this.usersService.findOneByFilter({email: email});
        if (currentUser && await AuthService.validatePassword(currentUser, password)) {
            const {...result} = currentUser;
            return result;
        }
        return null;
    }

    private static async comparePassword(pwd: string, hash: string) {
        return bcrypt.compare(pwd, hash);
    }

    private static async validatePassword(userCheckPwd: User, pwdToCheck: string) {
        const userPwd = userCheckPwd.password;
        if (!userPwd)
            throw new InternalServerErrorException('Can not execute Matching Password')
        return userCheckPwd && AuthService.comparePassword(pwdToCheck, userPwd);
    }

    async logIn(logForm: any): Promise<LoginReturnInfoUserDto> {
        const email = logForm._doc.email;
        let userFound = await this.usersService.findOneByFilter({email: email});
        if (!userFound)
            throw new UnauthorizedException("Invalid credential");

        userFound.isLog = true;
        const userUpdateInfo = new UpdateUserDto(userFound);
        const _id = userFound._id;
        this.usersService.updateInfo(userUpdateInfo, {_id});

        const payload = {
            email: userFound.email,
            sub: userFound._id,
        };
        const token = this.jwtService.sign(payload);
        return new LoginReturnInfoUserDto(token, userFound);
    }

    async signUp(registerForm: RegisterUserDto): Promise<ReturnInfoUserDto> {
        const user = await this.usersService.create(registerForm);
        return new ReturnInfoUserDto(user);
    }

    async logOut(_id: string) {
        const currentUser = await this.usersService.findOneByFilter({_id: _id});
        if (!currentUser)
            throw new NotFoundException("User Not found");
        this.usersService.logOut(currentUser._id);
    }
}