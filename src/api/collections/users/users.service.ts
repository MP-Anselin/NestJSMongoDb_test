import {ConflictException, Injectable, InternalServerErrorException} from "@nestjs/common";
import {Model, Types} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {UpdateUserDto} from "./dto/update-user.dto";
import {RegisterUserDto} from "../auth/dto/register-user.dto";
import * as bcrypt from "bcryptjs";
import {Post} from "../posts/schemas/post.schema";
import {ReturnInfoUserDto} from "./dto/return-info-user.dto";
import {NotFoundException} from "@nestjs/common/exceptions/not-found.exception";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async create(newUserInfo: RegisterUserDto): Promise<User> {
        const {email} = newUserInfo;
        const userExist = await this.userModel.findOne({email});
        if (userExist) {
            throw new ConflictException("email already exist");
        }
        const newUser = new this.userModel(newUserInfo);
        newUser.createdAt = new Date();
        newUser.updatedAt = new Date();
        newUser.isLog = false;

        newUser.salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(newUser.password, newUser.salt);

        try {
            await newUser.save();
        } catch (error) {
            if (error.code === "23505") {
                throw new ConflictException("User already exist");
            } else {
                throw new InternalServerErrorException();
            }
        }
        newUser.password = null;
        delete newUser.password;
        return newUser;
    }

    updateInfo(updateInfo: Partial<UpdateUserDto>, userFilterQuery: {}) {
        updateInfo.updatedAt = new Date();
        try {
            return this.userModel.findOneAndUpdate(userFilterQuery, updateInfo, {useFindAndModify: false});
        } catch (e) {
            throw new InternalServerErrorException();
        }
    }

    logOut(_id: string) {
        const userUpdateInfo = new UpdateUserDto();
        userUpdateInfo.isLog = false;
        this.updateInfo(userUpdateInfo, {_id});
    }

    async updatePostsArray(_id: Types.ObjectId | string, newPost: Post) {
        return "that function has to be delete"
    }

    async addBookToBookList(_id: Types.ObjectId | string, bookInfo: any) {
        const userUpdate = await this.findOneByFilter({_id: _id});
        if (!userUpdate)
            throw new NotFoundException()
        else if (userUpdate.books.includes(bookInfo))
            throw new ConflictException()
        userUpdate.books.push(bookInfo);
        return this.updateInfo(userUpdate, {_id});
    }

    async addBookToFavoriteList(_id: Types.ObjectId | string, bookInfo: any) {
        const userUpdate = await this.findOneByFilter({_id: _id});
        if (!userUpdate)
            throw new NotFoundException()
        else if (userUpdate.favorite_books.includes(bookInfo))
            throw new ConflictException()
        userUpdate.favorite_books.push(bookInfo);
        return this.updateInfo(userUpdate, {_id});
    }

    async deleteBookToFavoriteList(_id: Types.ObjectId | string, bookInfo: any) {
        const userUpdate = await this.findOneByFilter({_id: _id});
        if (!userUpdate || !userUpdate.favorite_books.includes(bookInfo))
            throw new NotFoundException()
        userUpdate.favorite_books.splice(bookInfo, 1)
        return this.updateInfo(userUpdate, {_id});
    }

    async findOneByFilter(filter: {}): Promise<User> {
        const user: User = await this.userModel.findOne(filter);
        if (user)
            return user;
        throw new NotFoundException()
    }

    async findAll(parse: {} = {}) {
        const usersListInfo = [];
        let count = 0;
        const usersList = !parse ? await this.userModel.find() : await this.userModel.find(parse);

        usersList.forEach(function (element) {
            usersListInfo[count] = new ReturnInfoUserDto(element);
            count++;
        });
        return usersListInfo;
    }

    async findOne(parse: {}): Promise<ReturnInfoUserDto> {
        const user = await this.userModel.findOne(parse);
        if (user)
            return new ReturnInfoUserDto(user);
        throw new NotFoundException()
    }

    async update(_id: string, updateUserDto: UpdateUserDto): Promise<ReturnInfoUserDto> {
        updateUserDto.updatedAt = new Date();
        const user = await this.updateInfo(updateUserDto, {_id});
        if (user)
            return new ReturnInfoUserDto(user);
        throw new InternalServerErrorException()
    }

    async remove(_id: string): Promise<ReturnInfoUserDto> {
        const user = await this.userModel.findByIdAndDelete(_id);
        if (user)
            return new ReturnInfoUserDto(user);
        throw new InternalServerErrorException()
    }
}
