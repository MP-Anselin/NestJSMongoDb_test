/// <reference types="mongoose" />
import { Book } from "../../books/schemas/book.schema";
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    isLog: boolean;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    roles: string[];
    salt: string;
    books: Book[];
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
