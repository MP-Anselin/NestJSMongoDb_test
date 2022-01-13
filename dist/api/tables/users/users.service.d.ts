import { Model, Types } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RegisterUserDto } from "../auth/dto/register-user.dto";
import { Post } from "../posts/schemas/post.schema";
import { ReturnInfoUserDto } from "./dto/return-info-user.dto";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(newUserInfo: RegisterUserDto): Promise<User>;
    updateInfo(updateInfo: Partial<UpdateUserDto>, userFilterQuery: {}): Promise<User & Document & import("mongoose").Document<any, any, UserDocument>>;
    logOut(_id: string): Promise<void>;
    updatePostsArray(_id: Types.ObjectId | string, newPost: Post): Promise<User & Document & import("mongoose").Document<any, any, UserDocument>>;
    findById(_id: {}): Promise<ReturnInfoUserDto>;
    findByEmail(email: {}): Promise<ReturnInfoUserDto>;
    findByUsername(username: {}): Promise<ReturnInfoUserDto>;
    findByUsernameFullInfo(username: {}): Promise<User>;
    findAll(): Promise<any[]>;
    findOne(_id: string): Promise<ReturnInfoUserDto>;
    update(_id: string, updateUserDto: UpdateUserDto): Promise<ReturnInfoUserDto>;
    remove(_id: string): Promise<ReturnInfoUserDto>;
}
