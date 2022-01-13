/// <reference types="mongoose" />
import { Post } from "../../posts/schemas/post.schema";
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    isLog: boolean;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    roles: string[];
    salt: string;
    posts: Post[];
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
