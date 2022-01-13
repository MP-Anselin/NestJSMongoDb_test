"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
class UpdateUserDto {
    constructor(user) {
        if (!user)
            return;
        this.updatedAt = user.updatedAt;
        this.lastName = user.lastName;
        this.firstName = user.firstName;
        this.email = user.email;
        this.username = user.username;
        this.roles = user.roles;
    }
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map