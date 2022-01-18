"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnInfoUserDto = void 0;
class ReturnInfoUserDto {
    constructor(user) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.isLog = user.isLog;
        this.username = user.username;
        this.role = user.role;
        this.books = user.books;
        this.favorite_books = user.favorite_books;
    }
}
exports.ReturnInfoUserDto = ReturnInfoUserDto;
//# sourceMappingURL=return-info-user.dto.js.map