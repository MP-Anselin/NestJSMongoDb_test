import { Types } from "mongoose";

export class CreateBookDto {
    name: string;
    isbn: string;
    author: Types.ObjectId | string;
}
