"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnInfoUserDto = void 0;
class ReturnInfoUserDto {
    constructor(user) {
        this._id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.isLog = user.isLog;
        this.username = user.username;
        this.roles = user.roles;
        this.posts = user.posts;
    }
}
exports.ReturnInfoUserDto = ReturnInfoUserDto;
//# sourceMappingURL=return-info-user.dto.js.map