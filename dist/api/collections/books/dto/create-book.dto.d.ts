import { Types } from "mongoose";
export declare class CreateBookDto {
    name: string;
    isbn: string;
    author: Types.ObjectId | string;
}
