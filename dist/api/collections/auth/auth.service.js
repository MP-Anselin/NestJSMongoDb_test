"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const not_found_exception_1 = require("@nestjs/common/exceptions/not-found.exception");
const update_user_dto_1 = require("../users/dto/update-user.dto");
const login_return_info_user_dto_1 = require("./dto/login-return-info-user.dto");
const return_info_user_dto_1 = require("../users/dto/return-info-user.dto");
let AuthService = AuthService_1 = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(logUser) {
        const { username, password } = logUser;
        const currentUser = await this.usersService.findByFilter({ username: username });
        if (currentUser && await AuthService_1.validatePassword(currentUser, password)) {
            const { password } = currentUser, result = __rest(currentUser, ["password"]);
            return result;
        }
        return null;
    }
    static async comparePassword(pwd, hash) {
        return bcrypt.compare(pwd, hash);
    }
    static async validatePassword(userCheckPwd, pwdToCheck) {
        const userPwd = userCheckPwd.password;
        return userCheckPwd && AuthService_1.comparePassword(pwdToCheck, userPwd);
    }
    async logIn(logForm) {
        const email = logForm._doc.email;
        let userFound = await this.usersService.findByFilter({ email: email });
        if (!userFound) {
            throw new common_1.UnauthorizedException("Invalid credential");
        }
        userFound.isLog = true;
        const userUpdateInfo = new update_user_dto_1.UpdateUserDto(userFound);
        const _id = userFound._id;
        await this.usersService.updateInfo(userUpdateInfo, { _id });
        const payload = {
            email: userFound.email,
            sub: userFound._id,
            username: userFound.username,
            role: userFound.role
        };
        const token = this.jwtService.sign(payload);
        return new login_return_info_user_dto_1.LoginReturnInfoUserDto(token, userFound);
    }
    async signUp(registerForm) {
        const user = await this.usersService.create(registerForm);
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async logOut(_id) {
        const currentUser = await this.usersService.findByFilter({ _id: _id });
        if (!currentUser)
            throw new not_found_exception_1.NotFoundException("User Not found");
        await this.usersService.logOut(currentUser._id);
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map