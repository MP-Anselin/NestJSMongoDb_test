import { User } from "../schemas/user.schema";
import { Book } from "../../books/schemas/book.schema";
export declare class ReturnInfoUserDto {
    constructor(user: Partial<User>);
    _id: string;
    role: string;
    last_name: string;
    first_name: string;
    email: string;
    username: string;
    isLog: boolean;
    books: Book[];
}
