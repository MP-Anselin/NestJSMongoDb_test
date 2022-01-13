"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginReturnInfoUserDto = void 0;
const return_info_user_dto_1 = require("../../users/dto/return-info-user.dto");
class LoginReturnInfoUserDto extends return_info_user_dto_1.ReturnInfoUserDto {
    constructor(token, user) {
        if (!user)
            return;
        super(user);
        this.access_token = token;
    }
}
exports.LoginReturnInfoUserDto = LoginReturnInfoUserDto;
//# sourceMappingURL=login-return-info-user.dto.js.map