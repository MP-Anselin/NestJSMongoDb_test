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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const update_user_dto_1 = require("./dto/update-user.dto");
const bcrypt = require("bcryptjs");
const return_info_user_dto_1 = require("./dto/return-info-user.dto");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(newUserInfo) {
        const { email } = newUserInfo;
        const userExist = await this.userModel.findOne({ email });
        if (userExist) {
            throw new common_1.ConflictException("Username already exist");
        }
        const newUser = new this.userModel(newUserInfo);
        newUser.createdAt = new Date();
        newUser.updatedAt = new Date();
        newUser.isLog = false;
        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(newUser.password, newUser.salt);
        try {
            await newUser.save();
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("User already exist");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        newUser.password = null;
        delete newUser.password;
        return newUser;
    }
    async updateInfo(updateInfo, userFilterQuery) {
        updateInfo.updatedAt = new Date();
        return this.userModel.findOneAndUpdate(userFilterQuery, updateInfo, { useFindAndModify: false });
    }
    async logOut(_id) {
        const userUpdateInfo = new update_user_dto_1.UpdateUserDto();
        userUpdateInfo.isLog = false;
        await this.updateInfo(userUpdateInfo, { _id });
    }
    async updatePostsArray(_id, newPost) {
        return "that function has to be delete";
    }
    async updateBookArray(_id, newBook) {
        const userCreator = await this.findById({ _id });
        userCreator.books.push(newBook);
        return this.updateInfo(userCreator, { _id });
    }
    async findById(_id) {
        const user = await this.userModel.findOne(_id);
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async findByEmail(email) {
        const user = await this.userModel.findOne(email);
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async findByUsername(username) {
        const user = await this.userModel.findOne(username);
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async findByUsernameFullInfo(username) {
        return this.userModel.findOne(username);
    }
    async findAll() {
        const usersListInfo = [];
        let count = 0;
        const usersList = await this.userModel.find();
        usersList.forEach(function (element) {
            usersListInfo[count] = new return_info_user_dto_1.ReturnInfoUserDto(element);
            count++;
        });
        return usersListInfo;
    }
    async findOne(_id) {
        const user = await this.userModel.findOne({ _id });
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async update(_id, updateUserDto) {
        updateUserDto.updatedAt = new Date();
        const user = await this.updateInfo(updateUserDto, { _id });
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
    async remove(_id) {
        const user = await this.userModel.findByIdAndDelete(_id);
        return new return_info_user_dto_1.ReturnInfoUserDto(user);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map