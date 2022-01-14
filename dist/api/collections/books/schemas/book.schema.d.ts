import { Types } from "mongoose";
export declare type BookDocument = Book & Document;
export declare class Book {
    author: Types.ObjectId;
    name: string;
    isbn: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const BookSchema: import("mongoose").Schema<import("mongoose").Document<Book, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
