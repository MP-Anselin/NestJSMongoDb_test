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
const not_found_exception_1 = require("@nestjs/common/exceptions/not-found.exception");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(newUserInfo) {
        const { email } = newUserInfo;
        const userExist = await this.userModel.findOne({ email });
        if (userExist) {
            throw new common_1.ConflictException("email already exist");
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
    updateInfo(updateInfo, userFilterQuery) {
        updateInfo.updatedAt = new Date();
        try {
            return this.userModel.findOneAndUpdate(userFilterQuery, updateInfo, { useFindAndModify: false });
        }
        catch (e) {
            throw new common_1.InternalServerErrorException();
        }
    }
    logOut(_id) {
        const userUpdateInfo = new update_user_dto_1.UpdateUserDto();
        userUpdateInfo.isLog = false;
        this.updateInfo(userUpdateInfo, { _id });
    }
    async updatePostsArray(_id, newPost) {
        return "that function has to be delete";
    }
    async addBookToBookList(_id, bookInfo) {
        const userUpdate = await this.findOneByFilter({ _id: _id });
        if (!userUpdate)
            throw new not_found_exception_1.NotFoundException();
        else if (userUpdate.books.includes(bookInfo))
            throw new common_1.ConflictException();
        userUpdate.books.push(bookInfo);
        return this.updateInfo(userUpdate, { _id });
    }
    async addBookToFavoriteList(_id, bookInfo) {
        const userUpdate = await this.findOneByFilter({ _id: _id });
        if (!userUpdate)
            throw new not_found_exception_1.NotFoundException();
        else if (userUpdate.favorite_books.includes(bookInfo))
            throw new common_1.ConflictException();
        userUpdate.favorite_books.push(bookInfo);
        return this.updateInfo(userUpdate, { _id });
    }
    async deleteBookToFavoriteList(_id, bookInfo) {
        const userUpdate = await this.findOneByFilter({ _id: _id });
        if (!userUpdate || !userUpdate.favorite_books.includes(bookInfo))
            throw new not_found_exception_1.NotFoundException();
        userUpdate.favorite_books.splice(bookInfo, 1);
        return this.updateInfo(userUpdate, { _id });
    }
    async findOneByFilter(filter) {
        const user = await this.userModel.findOne(filter);
        if (user)
            return user;
        throw new not_found_exception_1.NotFoundException();
    }
    async findAll(parse = {}) {
        const usersListInfo = [];
        let count = 0;
        const usersList = !parse ? await this.userModel.find() : await this.userModel.find(parse);
        usersList.forEach(function (element) {
            usersListInfo[count] = new return_info_user_dto_1.ReturnInfoUserDto(element);
            count++;
        });
        return usersListInfo;
    }
    async findOne(parse) {
        const user = await this.userModel.findOne(parse);
        if (user)
            return new return_info_user_dto_1.ReturnInfoUserDto(user);
        throw new not_found_exception_1.NotFoundException();
    }
    async update(_id, updateUserDto) {
        updateUserDto.updatedAt = new Date();
        const user = await this.updateInfo(updateUserDto, { _id });
        if (user)
            return new return_info_user_dto_1.ReturnInfoUserDto(user);
        throw new common_1.InternalServerErrorException();
    }
    async remove(_id) {
        const user = await this.userModel.findByIdAndDelete(_id);
        if (user)
            return new return_info_user_dto_1.ReturnInfoUserDto(user);
        throw new common_1.InternalServerErrorException();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map