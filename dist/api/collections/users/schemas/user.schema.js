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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let User = class User {
};
__decorate([
    mongoose_1.Prop({ require: true, unique: true }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    mongoose_1.Prop({ require: true, unique: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.MinLength(4),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], User.prototype, "isLog", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    mongoose_1.Prop({ require: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    mongoose_1.Prop({ type: [mongoose_2.Types.ObjectId], ref: "Book" }),
    __metadata("design:type", Array)
], User.prototype, "books", void 0);
User = __decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map