import { User } from "../schemas/user.schema";
import { Book } from "../../books/schemas/book.schema";
export declare class ReturnInfoUserDto {
    constructor(user: Partial<User>);
    _id: string;
    roles: string[];
    last_name: string;
    first_name: string;
    email: string;
    username: string;
    isLog: boolean;
    books: Book[];
}
