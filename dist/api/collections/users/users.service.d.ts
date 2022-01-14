import { Model, Types } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RegisterUserDto } from "../auth/dto/register-user.dto";
import { Post } from "../posts/schemas/post.schema";
import { ReturnInfoUserDto } from "./dto/return-info-user.dto";
import { Book } from "../books/schemas/book.schema";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(newUserInfo: RegisterUserDto): Promise<User>;
    updateInfo(updateInfo: Partial<UpdateUserDto>, userFilterQuery: {}): import("mongoose").Query<User & Document & import("mongoose").Document<any, any, UserDocument>, User & Document & import("mongoose").Document<any, any, UserDocument>, {}, UserDocument>;
    logOut(_id: string): void;
    updatePostsArray(_id: Types.ObjectId | string, newPost: Post): Promise<string>;
    updateBookArray(_id: Types.ObjectId | string, newBook: Book): Promise<User & Document & import("mongoose").Document<any, any, UserDocument>>;
    findByFilter(filter: {}): Promise<any>;
    findAll(parse?: {}): Promise<any[]>;
    findOne(parse: {}): Promise<ReturnInfoUserDto>;
    update(_id: string, updateUserDto: UpdateUserDto): Promise<ReturnInfoUserDto>;
    remove(_id: string): Promise<ReturnInfoUserDto>;
}
